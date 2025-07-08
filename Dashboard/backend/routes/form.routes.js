import express from "express"
import {forms} from "../controllers/form.controller.js";

const router = express.Router();

router.post('/form', forms); 
// router.get('/form', formsData)
export default router;