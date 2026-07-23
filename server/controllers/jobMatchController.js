import {
  analyzeJobMatch,
  getJobMatches,
} from "../services/jobMatchService.js";

export const analyzeResume = async (req, res) => {
  try {
    const { jobDescription } = req.body;

    if (!jobDescription) {
      return res.status(400).json({
        success: false,
        message: "Job description is required.",
      });
    }

    const result = await analyzeJobMatch({
      user: req.user._id,
      jobDescription,
    });

    res.status(200).json({
      success: true,
      message: "Job match analyzed successfully.",
      data: result,
    });
  } catch (error) {
    console.error("Job Match Error:", error);

    res.status(500).json({
      success: false,
      message: error.message || "Failed to analyze job match.",
    });
  }
};

export const getAllJobMatches = async (req, res) => {
  try {
    const matches = await getJobMatches(req.user._id);

    res.status(200).json({
      success: true,
      count: matches.length,
      data: matches,
    });
  } catch (error) {
    console.error("Fetch Job Matches Error:", error);

    res.status(500).json({
      success: false,
      message: error.message || "Failed to fetch job matches.",
    });
  }
};