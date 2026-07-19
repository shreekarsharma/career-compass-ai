import express from "express";
import { getCareerAdvice, getJobMatch } from "../controllers/aiController.js";

const router = express.Router();

// Career Advice
router.post("/career-advice", getCareerAdvice);

// Job Match
router.post("/job-match", getJobMatch);

export default router;