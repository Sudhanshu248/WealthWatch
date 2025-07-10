import express from "express";
import { askGeminiAI } from "../controllers/genAI.controller.js";

const router = express.Router();

router.post("/ask/ai", askGeminiAI);

export default router;
