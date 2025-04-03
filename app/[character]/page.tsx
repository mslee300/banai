// app/[character]/page.tsx
import ChatClient from "./ChatClient";

export default function ChatPage({
  params,
}: {
  params: { character: string };
}) {
  return <ChatClient characterId={params.character} />;
}
