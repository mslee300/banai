// app/[character]/page.tsx
import ChatClient from "./ChatClient";

interface PageProps {
  params: {
    character: string;
  };
}

export default async function ChatPage({ params }: PageProps) {
  // Await params to satisfy Next.js' dynamic route requirement.
  const resolvedParams = await Promise.resolve(params);
  return <ChatClient characterId={resolvedParams.character} />;
}
