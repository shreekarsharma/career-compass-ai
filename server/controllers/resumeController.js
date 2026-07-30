import streamifier from "streamifier";
import Resume from "../models/Resume.js";
import { extractTextFromPDF } from "../utils/pdfParser.js";
import {
  saveResume,
  getUserResumes,
  getLatestResume,
} from "../services/resumeService.js";
import cloudinary from "../config/cloudinary.js";

// ===============================
// Upload Resume
// ===============================
export const uploadResume = async (req, res) => {
  try {
    console.log("Upload req.user:", req.user);

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please upload a PDF resume.",
      });
    }

    // Check if the user already has a resume
    const existingResume = await getLatestResume(req.user._id);

    if (existingResume) {
      return res.status(400).json({
        success: false,
        message: "Resume already uploaded.",
      });
    }

    // Upload PDF directly to Cloudinary from memory
    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          resource_type: "raw",
          folder: "career-compass/resumes",
        },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        }
      );

      streamifier.createReadStream(req.file.buffer).pipe(uploadStream);
    });

    // Extract text from Cloudinary URL
    const extractedText = await extractTextFromPDF(result.secure_url);

    // Save in MongoDB
    const savedResume = await saveResume({
      user: req.user._id,
      fileName: result.original_filename || req.file.originalname,
      filePath: result.secure_url,
      cloudinaryId: result.public_id,
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

    if (resume.cloudinaryId) {
      await cloudinary.uploader.destroy(resume.cloudinaryId, {
        resource_type: "raw",
      });
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