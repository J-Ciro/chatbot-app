import type { Message } from "../../models/Message";

type MessageBubbleProps = {
  message: Message;
};

const MessageBubble = ({ message }: MessageBubbleProps) => (
  <div
    className={`message ${message.sender}`}
    data-id={message.id_message}
    aria-live="polite"
  >
    <span className="sender">{message.sender}:</span>
    <p>{message.content}</p>
    <time className="timestamp">
      {new Date(message.created_at).toLocaleTimeString()}
    </time>
  </div>
);

export default MessageBubble;
