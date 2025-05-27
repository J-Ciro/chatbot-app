import { useChat } from "./hooks/useChat";
import MessageList from "./components/Chat/MessageList";
import ChatInput from "./components/Chat/ChatInput";
import ChatContainer from "./components/Layout/ChatContainer";
import LoadingDots from "./components/Loading/LoadingDots";

const App = () => {
  const { messages, isLoading, error, sendMessage } = useChat();

  return (
    <ChatContainer>
      {error && <div className="error-message">{error}</div>}

      <MessageList messages={messages} isLoading={isLoading} />

      {isLoading && (
        <div className="loading-container">
          <LoadingDots />
        </div>
      )}

      <ChatInput onSend={sendMessage} disabled={isLoading} />
    </ChatContainer>
  );
};

export default App;
