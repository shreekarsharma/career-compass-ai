import express from "express";
import { saveResumeAnalysis } from "../controllers/resumeController.js";

const router = express.Router();

router.post("/", saveResumeAnalysis);

export default router;