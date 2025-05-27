import axios from "axios";
import type { Message } from "../models/Message";

const api = axios.create({
  baseURL: "http://localhost:3001/",
});

export const ChatService = {
  getMessages: async (): Promise<Message[]> => {
    const response = await api.get("/messages");
    return response.data;
  },

  sendMessage: async (input: string): Promise<Message[]> => {
    const response = await api.post("/messages", { input });
    return response.data;
  },
};
