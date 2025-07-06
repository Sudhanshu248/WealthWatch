import express from "express";
import { goals } from "../controllers/goals.controller.js";
const router = express.Router();

router.route("/goals").post(goals);

 
export default router;