import express from "express";
import { saveResumeAnalysis } from "../controllers/resumeController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, saveResumeAnalysis);

export default router;
