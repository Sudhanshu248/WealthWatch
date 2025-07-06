import express from "express"
import forms from "../controllers/form.controller.js";

const router = express.Router();

router.route("/form").post(forms);

export default router;