import express from "express";
import { getCareerAdvice } from "../controllers/aiController.js";

const router = express.Router();

// POST /api/ai/career-advice
router.post("/career-advice", getCareerAdvice);

export default router;
