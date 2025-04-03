// app/[character]/page.tsx
import ChatClient from "./ChatClient";

export default async function ChatPage(props: any) {
  const { params } = props;
  const resolvedParams = await Promise.resolve(params);
  return <ChatClient characterId={resolvedParams.character} />;
}
