import pool from "../config/database";
import { Message } from "../types/types";

export const getMessages = async (): Promise<Message[]> => {
  const [rows] = await pool.query<Message[]>(
    "SELECT * FROM messages ORDER BY timestamps ASC"
  );
  return rows;
};

export const saveMessage = async (
  content: string,
  sender: "user" | "bot"
): Promise<void> => {
  await pool.query("INSERT INTO messages (content, sender) VALUES (?, ?)", [
    content,
    sender,
  ]);
};
