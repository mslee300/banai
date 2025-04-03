/* eslint-disable @typescript-eslint/no-explicit-any */
import ChatClient from "./ChatClient";

export default async function ChatPage({ params }: any) {
  const resolvedParams = await Promise.resolve(params);
  return <ChatClient characterId={resolvedParams.character} />;
}
