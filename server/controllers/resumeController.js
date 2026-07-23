import fs from "fs";
import Resume from "../models/Resume.js";
import { extractTextFromPDF } from "../utils/pdfParser.js";
import {
  saveResume,
  getUserResumes,
} from "../services/resumeService.js";

// ===============================
// Upload Resume
// ===============================
export const uploadResume = async (req, res) => {
  try {
    console.log("Upload req.user:", req.user);

    if (!req.file) {
      return res.status(400).json({
        message: "Please upload a PDF resume.",
      });
    }

    // Extract text from uploaded PDF
    const extractedText = await extractTextFromPDF(req.file.path);

    // Save in MongoDB
    const savedResume = await saveResume({
      user: req.user._id,
      fileName: req.file.filename,
      filePath: req.file.path,
      extractedText,
    });

    console.log("Saved Resume:", savedResume);

    res.status(201).json({
      success: true,
      message: "Resume uploaded successfully.",
      resume: savedResume,
    });
  } catch (error) {
    console.error("Upload Resume Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===============================
// Get User Resume History
// ===============================
export const getResumes = async (req, res) => {
  try {
    const resumes = await getUserResumes(req.user._id);

    res.status(200).json(resumes);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

// ===============================
// Delete Resume
// ===============================
export const deleteResume = async (req, res) => {
  try {
    const resume = await Resume.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!resume) {
      return res.status(404).json({
        message: "Resume not found.",
      });
    }

    // Delete PDF if it exists
    if (resume.filePath && fs.existsSync(resume.filePath)) {
      fs.unlinkSync(resume.filePath);
    }

    await resume.deleteOne();

    res.status(200).json({
      success: true,
      message: "Resume deleted successfully.",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
};