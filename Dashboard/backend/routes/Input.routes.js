import express from 'express';
import { getInputData } from '../controllers/Input.controller.js';
const router = express.Router();

// GET all input data
router.get('/alldata' , getInputData);

export default router;
