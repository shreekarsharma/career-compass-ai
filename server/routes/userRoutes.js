import express from "express";
import {
  registerUser,
  loginUser,
  getUser,
  getProfile,
} from "../controllers/userController.js";

import { getProfileStats } from "../controllers/profileController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public Routes
router.post("/", registerUser);
router.post("/login", loginUser);

// Protected Routes
router.get("/profile", protect, getProfile);
router.get("/profile/stats", protect, getProfileStats);

// Get User by ID
router.get("/:id", getUser);

export default router;