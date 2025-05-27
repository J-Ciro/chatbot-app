export type Sender = "user" | "bot";

export interface Message {
  id_message: string;
  content: string;
  sender: Sender;
  created_at: string;
}
