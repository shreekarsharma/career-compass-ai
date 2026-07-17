import { saveResumeAnalysis as saveResumeAnalysisService } from "../services/resumeService.js";

export const saveResumeAnalysis = async (req, res) => {
  try {
    const analysis = await saveResumeAnalysisService(req.body);

    res.status(201).json(analysis);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const uploadResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: "Please upload a PDF resume.",
      });
    }

    res.status(200).json({
      message: "Resume uploaded successfully.",
      fileName: req.file.filename,
      filePath: req.file.path,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
