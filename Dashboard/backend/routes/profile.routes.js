import express from "express"
import multer from "multer";
import {getUserData, uploadProfilePicture, updateProfileData} from "../controllers/profile.controller.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); 
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
  
});

const upload = multer({
  storage,
  limits: { fileSize: 4 * 1024 * 1024 }, // 4MB limit
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed!"), false);
    }
  }
});

router.post("/updateProfilePicture", (req, res) => {
  upload.single("profileImage")(req, res, function (err) {
    if (err) {
        if (err.code === 'LIMIT_FILE_SIZE') {
            return res.status(400).json({ message: "File size should not exceed 4MB" });
        }
      return res.status(400).json({ message: err.message });
    }
    uploadProfilePicture(req, res); 
  });
});

router.route("/updateProfilePicture").post(upload.single('profileImage'), uploadProfilePicture);
router.route("/updateProfileData").post(updateProfileData);

router.get('/getUserProfile', getUserData); 

export default router;