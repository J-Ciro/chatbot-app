import type { ReactNode } from "react";

type ChatContainerProps = {
  children: ReactNode;
};

const ChatContainer = ({ children }: ChatContainerProps) => (
  <div className="chat-container">
    <div className="chat-wrapper">{children}</div>
  </div>
);

export default ChatContainer;
