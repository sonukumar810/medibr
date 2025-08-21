import express from "express";
import multer from "multer";
import {
    loginDoctor,
    appointmentsDoctor,
    appointmentCancel,
    doctorList,
    changeAvailablity,
    appointmentComplete,
    doctorDashboard,
    doctorProfile,
    updateDoctorProfile
} from "../controllers/doctorController.js";

const router = express.Router();

// Set up multer to handle file uploads (stores in /uploads temporarily)
const upload = multer({ dest: "uploads/" });

router.post("/login", loginDoctor);
router.post("/appointments", appointmentsDoctor);
router.post("/cancel", appointmentCancel);
router.post("/complete", appointmentComplete);
router.get("/list", doctorList);
router.post("/availability", changeAvailablity);
router.post("/profile", doctorProfile);

// 🔁 Upload profile image with unsigned Cloudinary upload via multer
router.post("/update-profile", upload.single("image"), updateDoctorProfile);

router.post("/dashboard", doctorDashboard);

export default router;
