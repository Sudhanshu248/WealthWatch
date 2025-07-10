import express from "express"
import {forms} from "../controllers/form.controller.js";

const router = express.Router();

router.post('/form', forms); 
export default router;