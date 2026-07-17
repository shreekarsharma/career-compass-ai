import express from "express";
import {
  saveJobMatch,
  getJobMatches,
} from "../controllers/jobMatchController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Get all job matches
router.get("/", protect, getJobMatches);

// Save a new job match
router.post("/", protect, saveJobMatch);

export default router;
