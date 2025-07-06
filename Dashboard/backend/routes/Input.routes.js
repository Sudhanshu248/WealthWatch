import express from 'express';
import { getInputData ,SavedinputData } from '../controllers/Input.controller.js';
const router = express.Router();

router.route('/dailyrecord').post(SavedinputData);
router.get('/alldata' , getInputData);
export default router;
