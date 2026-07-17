import express from "express";
import { saveJobMatch } from "../controllers/jobMatchController.js";

const router = express.Router();

router.post("/", saveJobMatch);

export default router;