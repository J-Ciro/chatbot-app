import axios from "axios";
import type { Message } from "../models/Message";

const BASE_URL = process.env.NEXT_PUBLIC_BOT_API;

console.log(process.env.NEXT_PUBLIC_BOT_API);

const api = axios.create({
  baseURL: BASE_URL,
});

export const ChatService = {
  getMessages: async (): Promise<Message[]> => {
    const response = await api.get("/messages");
    return response.data;
  },

  sendMessage: async (input: string): Promise<Message> => {
    const response = await api.post("/messages", { input });
    return {
      id_message: Date.now().toString(),
      content: response.data.message,
      sender: "bot",
      created_at: new Date().toISOString(),
    };
  },
};
