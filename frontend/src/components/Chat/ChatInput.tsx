import { useState } from "react";
import "./styles/ChatInput.css";

type ChatInputProps = {
  onSend: (input: string) => void;
  disabled?: boolean;
};

const ChatInput = ({ onSend, disabled }: ChatInputProps) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSend(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Escribe tu mensaje..."
        disabled={disabled}
      />
      <button type="submit" disabled={disabled}>
        Enviar
      </button>
    </form>
  );
};

export default ChatInput;
