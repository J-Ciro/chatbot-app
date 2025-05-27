import { useChat } from "./hooks/useChat";
import MessageList from "./components/Chat/MessageList";
import ChatInput from "./components/Chat/ChatInput";
import ChatContainer from "./components/Layout/ChatContainer";

const App = () => {
  const { messages, isLoading, error, sendMessage } = useChat();

  return (
    <ChatContainer>
      {error && <div className="error-message">{error}</div>}

      <MessageList messages={messages} />

      {isLoading && <div className="loading">Cargando...</div>}

      <ChatInput onSend={sendMessage} disabled={isLoading} />
    </ChatContainer>
  );
};

export default App;
