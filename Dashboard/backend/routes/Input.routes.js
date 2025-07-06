import express from 'express';
import { getInputData ,SavedinputData } from '../controllers/Input.controller.js';
const router = express.Router();

router.post('/dailyrecord' ,SavedinputData);
router.get('/alldata' , getInputData);
export default router;
