import { Router, Request, Response } from "express";
import { getMessages, saveMessage } from "../services/dbService";
import { getAIResponse } from "../services/aiService";

const router = Router();

router.get("/", async (res: Response) => {
  try {
    const messages = await getMessages();
    res.json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener mensajes" });
  }
});

router.post("/", async (req: Request, res: Response) => {
  const { input } = req.body;
  try {
    await saveMessage(input, "user");
    const botMessage = await getAIResponse(input);
    await saveMessage(botMessage, "bot");
    res.json({ message: botMessage });
  } catch (error) {
    console.error("Error processing message:", error);
    res.status(500).json({ error: "Error processing message" });
  }
});

export default router;
