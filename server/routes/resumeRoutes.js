import express from "express";
import upload from "../config/multerConfig.js";
import { protect } from "../middleware/authMiddleware.js";
import {
  uploadResume,
  getResumes,
  deleteResume,
} from "../controllers/resumeController.js";

const router = express.Router();

// Upload Resume
router.post(
  "/upload",
  protect,
  upload.single("resume"),
  uploadResume
);

// Get Logged-in User Resumes
router.get("/", protect, getResumes);

// Delete Resume
router.delete("/:id", protect, deleteResume);

export default router;