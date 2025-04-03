// app/[character]/page.tsx
import ChatClient from "./ChatClient";

export default async function ChatPage({
  params,
}: {
  params: { character: string };
}) {
  // "Await" the params to satisfy Next.js
  const resolvedParams = await Promise.resolve(params);

  return <ChatClient characterId={resolvedParams.character} />;
}
