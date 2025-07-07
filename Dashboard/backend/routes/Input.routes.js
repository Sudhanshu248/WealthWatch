import express from 'express';
import { getInputData ,SavedinputData } from '../controllers/Input.controller.js';
const router = express.Router();


router.route('/alldata').get(getInputData).post(SavedinputData);;
export default router;
