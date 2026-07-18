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