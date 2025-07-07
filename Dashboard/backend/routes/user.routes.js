import express from "express";
import {signup, login ,Userdata} from "../controllers/user.controller.js";

const router = express.Router();

router.route('/signup').post(signup);
router.route('/login').post(login);
router.get('/userdata' ,Userdata);

export default router;



 