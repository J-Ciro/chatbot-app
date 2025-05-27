import { useEffect, useRef } from "react";
import type { Message } from "../../models/Message";
import MessageBubble from "./MessageBubble";

type MessageListProps = {
  messages: Message[];
};

const MessageList = ({ messages }: MessageListProps) => {
  useEffect(() => {
    console.log("Messages updated:", messages);
  }, [messages]);

  const endOfListRef = useRef<HTMLDivElement>(null);

  return (
    <div className="messages">
      {messages.map((msg) => (
        <MessageBubble key={`${msg.id_message}`} message={msg} />
      ))}

      <div ref={endOfListRef} />
    </div>
  );
};

export default MessageList;
