import express from 'express';
import { getInputData ,SavedinputData , deleteInputData } from '../controllers/Input.controller.js';
const router = express.Router();

router.post("/dashboard", SavedinputData);  // <-- POST to save/update goals
router.get("/alldata", getInputData);  // <-- GET endpoint to fetch goals
router.post("/deleteData" , deleteInputData)    
export default router;

