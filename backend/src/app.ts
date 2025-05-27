import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

import express from "express";
import cors from "cors";
import messagesRouter from "./routes/messages";

const app = express();
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Chatbot API",
      version: "1.0.0",
      description: "API para interactuar con un chatbot",
    },
  },
  apis: ["./src/routes/*.ts"],
};

const specs = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use(cors());
app.use(express.json());

app.use("/messages", messagesRouter);

export default app;
