import mongoose from "mongoose";

const resumeAnalysisSchema = new mongoose.Schema({

    resumeFileName: {
        type: String,
        required: true
    },

    summary: {
        type: String,
        default: ""
    },

    skills: {
        type: [String],
        default: []
    },

    strengths: {
        type: [String],
        default: []
    },

    weaknesses: {
        type: [String],
        default: []
    },

    missingSkills: {
        type: [String],
        default: []
    },

    careerPaths: {
        type: [String],
        default: []
    },

    learningRoadmap: {
        type: String,
        default: ""
    },

    recommendedCourses: {
        type: [String],
        default: []
    },

    interviewQuestions: {
        type: [String],
        default: []
    }

}, { timestamps: true });


const ResumeAnalysis = mongoose.model("ResumeAnalysis", resumeAnalysisSchema);

export default ResumeAnalysis;