import { NextResponse } from "next/server";

/**
 * POST /api/chat
 *
 * Expects a JSON body of the form:
 * {
 *   "systemMessage": "string",  // e.g. "You are Tý Quậy, a famous Vietnamese character..."
 *   "messages": [
 *     { "role": "system" | "user" | "assistant", "content": "some text" },
 *     ...
 *   ]
 * }
 *
 * Returns the JSON from OpenAI's Chat Completion endpoint.
 */
export async function POST(request: Request) {
  try {
    const { systemMessage, messages } = await request.json();

    // Validate the request body
    if (typeof systemMessage !== "string") {
      return NextResponse.json(
        { error: "Invalid request body. 'systemMessage' must be a string." },
        { status: 400 }
      );
    }
    if (!Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid request body. 'messages' must be an array." },
        { status: 400 }
      );
    }

    // Prepend the system message to the conversation
    const finalMessages = [
      { role: "system", content: systemMessage },
      ...messages,
    ];

    // Make a raw fetch call to OpenAI
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Use your environment variable
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: finalMessages,
        temperature: 1,
        max_tokens: 2048,
        top_p: 1,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("OpenAI API Error:", errorText);
      return NextResponse.json(
        { error: "OpenAI API request failed." },
        { status: 500 }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Error in /api/chat route:", error);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
