import { saveJobMatch as saveJobMatchService } from "../services/jobMatchService.js";

export const saveJobMatch = async (req, res) => {
    try {
        const jobMatch = await saveJobMatchService(req.body);

        res.status(201).json(jobMatch);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};