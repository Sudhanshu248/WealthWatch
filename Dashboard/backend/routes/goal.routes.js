// routes/goals.routes.js
import express from "express";
import { goals, getGoals } from "../controllers/goals.controller.js";

const router = express.Router();

router.get("/goals", getGoals);   // <-- GET endpoint to fetch goals
router.post("/goals", goals);     // <-- POST to save/update goals

export default router;
