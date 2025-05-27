import axios from "axios";
import { OpenAIResponse } from "../types/types";

const API_URL = process.env.API_URL || "";

export const getAIResponse = async (input: string): Promise<string> => {
  const response = await axios.post<OpenAIResponse>(API_URL, { input });
  return response.data.choices[0].message.content;
};
