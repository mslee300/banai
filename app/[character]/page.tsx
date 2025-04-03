// app/[character]/page.tsx
import ChatClient from "./ChatClient";

export default async function ChatPage({ params }: any) {
  return <ChatClient characterId={params.character} />;
}
