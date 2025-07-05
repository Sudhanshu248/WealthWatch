import express from "express";
import { goals, getGoals } from "../controllers/goals.controller.js";
const router = express.Router();

// Correct route: only '/goals', since '/list' is handled in index.js
router.route('/goals').post(goals).get(getGoals);

export default router;