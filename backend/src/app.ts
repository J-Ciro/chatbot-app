import express from "express";
import cors from "cors";
import messagesRouter from "./routes/messages";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/messages", messagesRouter);

export default app;
