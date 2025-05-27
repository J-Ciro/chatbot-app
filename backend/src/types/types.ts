import { RowDataPacket } from "mysql2";

export interface Message extends RowDataPacket {
  id_message: number;
  content: string;
  sender: "user" | "bot";
  created_at: Date;
}

export interface OpenAIResponse {
  choices: Array<{
    message: {
      content: string;
    };
  }>;
}
