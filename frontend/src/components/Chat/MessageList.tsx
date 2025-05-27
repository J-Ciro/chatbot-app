import { useRef, useEffect } from "react";
import type { Message } from "../../models/Message";
import MessageBubble from "./MessageBubble";

type MessageListProps = {
  messages: Message[];
  isLoading?: boolean;
};

const MessageList = ({ messages, isLoading }: MessageListProps) => {
  const endOfListRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (endOfListRef.current) {
      endOfListRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [messages, isLoading]); // Añade isLoading como dependencia

  return (
    <div className="messages-container">
      {messages.map((msg) => (
        <MessageBubble key={`${msg.id_message}`} message={msg} />
      ))}

      <div ref={endOfListRef} />
    </div>
  );
};

export default MessageList;
