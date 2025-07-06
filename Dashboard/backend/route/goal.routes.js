import express from "express";
import { goals, getGoals } from "../controllers/goals.controller.js";
const router = express.Router();


router.route('/goals').post(goals).get(getGoals);

export default router;