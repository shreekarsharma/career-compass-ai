import express from "express";
import cors from "cors";

import userRoutes from "./routes/userRoutes.js";
import resumeRoutes from "./routes/resumeRoutes.js";
import jobMatchRoutes from "./routes/jobMatchRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";

import resumeAnalysisRoutes from "./routes/resumeAnalysisRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/resumes", resumeRoutes);
app.use("/api/jobmatches", jobMatchRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/resume-analysis", resumeAnalysisRoutes);

app.get("/", (req, res) => {
  res.send("CareerCompass AI Backend is Running");
});

export default app;
