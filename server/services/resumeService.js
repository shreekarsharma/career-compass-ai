import Resume from "../models/Resume.js";

// ===============================
// Save Resume
// ===============================
export const saveResume = async (resumeData) => {
  return await Resume.create(resumeData);
};

// ===============================
// Get All Resumes of Logged-in User
// ===============================
export const getUserResumes = async (userId) => {
  return await Resume.find({ user: userId }).sort({
    createdAt: -1,
  });
};

// ===============================
// Get Latest Resume
// ===============================
export const getLatestResume = async (userId) => {
  return await Resume.findOne({
    user: userId,
  }).sort({
    createdAt: -1,
  });
};

// ===============================
// Get Resume By ID
// ===============================
export const getResumeById = async (id) => {
  return await Resume.findById(id);
};

// ===============================
// Delete Resume
// ===============================
export const deleteResumeById = async (id) => {
  return await Resume.findByIdAndDelete(id);
};