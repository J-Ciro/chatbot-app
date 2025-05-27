import { useState, useEffect } from "react";
import { ChatService } from "../services/ChatService";
import type { Message } from "../models/Message";

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const data = await ChatService.getMessages();
        setMessages(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Error al obtener mensajes"
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchMessages();
  }, []);

  const sendMessage = async (input: string) => {
    try {
      setIsLoading(true);
      const tempId =
        Date.now().toString(36) + Math.random().toString(36).substring(2);
      const userMessage: Message = {
        id_message: tempId,
        content: input,
        sender: "user",
        created_at: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, userMessage]);
      const botMessage = await ChatService.sendMessage(input);
      console.log("Bot response:", botMessage);

      const newMessages = Array.isArray(botMessage) ? botMessage : [botMessage];

      setMessages((prev) => [...prev, ...newMessages]);
    } catch (err) {
      console.error("Error sending message:", err);
      setError(
        err instanceof Error ? err.message : "Error al enviar el mensaje"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return { messages, isLoading, error, sendMessage };
};
