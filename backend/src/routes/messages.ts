import { Router, Request, Response } from "express";
import { getMessages, saveMessage } from "../services/ChatService";
import { getAIResponse } from "../services/ApiService";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Messages
 *   description: Operaciones relacionadas con mensajes del chat
 */

/**
 * @swagger
 * /messages:
 *   get:
 *     summary: Obtiene todos los mensajes del chat
 *     tags: [Messages]
 *     responses:
 *       200:
 *         description: Lista de mensajes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Message'
 *       500:
 *         description: Error del servidor
 */

router.get("/", async (req: Request, res: Response) => {
  try {
    const messages = await getMessages();
    res.json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener mensajes" });
  }
});

/**
 * @swagger
 * /messages:
 *   post:
 *     summary: Envía un nuevo mensaje y obtiene respuesta del bot
 *     tags: [Messages]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - input
 *             properties:
 *               input:
 *                 type: string
 *                 description: Mensaje del usuario
 *                 example: Hola, ¿cómo estás?
 *     responses:
 *       200:
 *         description: Respuesta del bot
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Respuesta del bot
 *       400:
 *         description: Entrada inválida
 *       500:
 *         description: Error del servidor
 */

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

/**
 * @swagger
 * components:
 *   schemas:
 *     Message:
 *       type: object
 *       properties:
 *         id_message:
 *           type: integer
 *           description: ID del mensaje
 *         content:
 *           type: string
 *           description: Contenido del mensaje
 *         sender:
 *           type: string
 *           enum: [user, bot]
 *           description: Quién envió el mensaje
 *         created_at:
 *           type: string
 *           format: date-time
 *           description: Fecha de creación
 */

export default router;
