import { useRef } from "react";
import type { Message } from "../../models/Message";
import MessageBubble from "./MessageBubble";

type MessageListProps = {
  messages: Message[];
};

const MessageList = ({ messages }: MessageListProps) => {
  const endOfListRef = useRef<HTMLDivElement>(null);

  return (
    <div className="messages">
      {messages.map((msg) => (
        <MessageBubble
          key={`${msg.id_message}-${msg.created_at}`}
          message={msg}
        />
      ))}

      <div ref={endOfListRef} />
    </div>
  );
};

export default MessageList;
