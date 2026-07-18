import express from "express";
import {
  saveResumeAnalysis,
  uploadResume,
} from "../controllers/resumeController.js";
import { protect } from "../middleware/authMiddleware.js";
import upload from "../config/multerConfig.js";

const router = express.Router();

// Upload resume (PDF)
router.post("/upload", protect, upload.single("resume"), uploadResume);

// Save resume analysis
router.post("/", protect, saveResumeAnalysis);

export default router;
