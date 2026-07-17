import ResumeAnalysis from "../models/ResumeAnalysis.js";

export const saveResumeAnalysis = async (resumeData) => {
    try {
        const analysis = new ResumeAnalysis(resumeData);
        return await analysis.save();
    } catch (error) {
        throw error;
    }
};

export const getResumeHistory = async () => {
    try {
        const history = await ResumeAnalysis.find();
        return history;
    } catch (error) {
        throw error;
    }
};

export const deleteResumeAnalysis = async (analysisId) => {
    try {
        const deletedAnalysis = await ResumeAnalysis.findByIdAndDelete(analysisId);
        return deletedAnalysis;
    } catch (error) {
        throw error;
    }
};