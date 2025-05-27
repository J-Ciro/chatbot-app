import database from "../config/database";
import { Message } from "../types/types";

export const getMessages = async (): Promise<Message[]> => {
  const [rows] = await database.query<Message[]>(
    "SELECT * FROM messages ORDER BY created_at ASC"
  );
  return rows;
};

export const saveMessage = async (
  content: string,
  sender: "user" | "bot"
): Promise<void> => {
  await database.query("INSERT INTO messages (content, sender) VALUES (?, ?)", [
    content,
    sender,
  ]);
};
