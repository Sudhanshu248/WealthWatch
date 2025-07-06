import express from 'express';
import { getInputData ,SavedinputData } from '../controllers/Input.controller.js';
const router = express.Router();

router.post("/dashboard", SavedinputData);   // <-- GET endpoint to fetch goals

export default router;

// router.route('/dailyrecord').post(SavedinputData);
// router.get('/alldata' , getInputData);