import {
  saveResume,
  saveResumeAnalysis as saveResumeAnalysisService,
} from "../services/resumeService.js";

import { extractTextFromPDF } from "../utils/pdfParser.js";

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

    const extractedText = await extractTextFromPDF(req.file.path);

    // ===== DEBUG LOGS =====
    console.log("========== UPLOAD DEBUG ==========");
    console.log("req.user:", req.user);
    console.log("req.file:", req.file);
    console.log("==================================");
    // =======================

    const savedResume = await saveResume({
      user: req.user.id,
      fileName: req.file.filename,
      filePath: req.file.path,
      extractedText,
    });

    res.status(200).json({
      message: "Resume uploaded successfully.",
      resume: savedResume,
    });
  } catch (error) {
    console.error("UPLOAD ERROR:", error);

    res.status(500).json({
      message: error.message,
    });
  }
};
