import type { Message } from "../../models/Message";

import "./styles/MessageBubble.css";

type MessageBubbleProps = {
  message: Message;
};

const MessageBubble = ({ message }: MessageBubbleProps) => (
  <div
    className={`message-container ${message.sender}`}
    data-id={message.id_message}
    aria-live="polite"
  >
    <div className="message-content-wrapper">
      <span className="message-sender">
        <svg
          fill="#000000"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z"></path>
          </g>
        </svg>
      </span>
      <p className="message-body">{message.content}</p>
    </div>

    <time className="message-timestamp">
      {new Date(message.created_at).toLocaleTimeString()}
    </time>
  </div>
);

export default MessageBubble;
