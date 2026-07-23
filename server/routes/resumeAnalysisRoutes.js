import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { getResumeAnalysis } from "../controllers/resumeAnalysisController.js";

const router = express.Router();

// Get AI Resume Analysis
router.get("/", protect, getResumeAnalysis);

export default router;