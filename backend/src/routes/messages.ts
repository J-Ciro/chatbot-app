import { Router } from "express";
import { Request, Response } from "express-serve-static-core";
import pool from "../config/database";
import axios from "axios";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM messages ORDER BY created_at ASC"
    );
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener mensajes" });
  }
});

export default router;
