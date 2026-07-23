import { analyzeResume } from "../services/resumeAnalysisService.js";

export const getResumeAnalysis = async (req, res) => {
  try {
    const analysis = await analyzeResume(req.user._id);

    res.status(200).json({
      success: true,
      analysis,
    });
  } catch (error) {
    console.error("Resume Analysis Controller Error:", error);

    if (error.message === "Please upload a resume first.") {
      return res.status(404).json({
        success: false,
        message: error.message,
      });
    }

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};