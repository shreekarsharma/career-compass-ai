import express from "express";
import {
  analyzeResume,
  getAllJobMatches,
} from "../controllers/jobMatchController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Analyze Resume Against Job Description
router.post("/analyze", protect, analyzeResume);

// Get Logged-in User's Job Match History
router.get("/", protect, getAllJobMatches);

export default router;