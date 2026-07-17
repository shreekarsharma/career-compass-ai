import express from "express";
import { saveJobMatch } from "../controllers/jobMatchController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, saveJobMatch);

export default router;
