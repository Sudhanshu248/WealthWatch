import express from "express"
import multer from "multer";
import {getUserData, uploadProfilePicture} from "../controllers/profile.controller.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
  
});

const upload = multer({ 
  storage,
    fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed!"), false);
      alert("Only image files are allowed")
    }
  }
 });

router.route("/updateProfilePicture").post(upload.single('profileImage'), uploadProfilePicture);

router.get('/getUserProfile', getUserData); 

export default router;
// router.route("/updateProfileData").post(updateProfileData);