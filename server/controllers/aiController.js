const { generateCareerAdvice } = require("../services/geminiService");

const getCareerAdvice = async (req, res) => {
    try {
        const { prompt } = req.body;

        if (!prompt) {
            return res.status(400).json({
                success: false,
                message: "Prompt is required"
            });
        }

        const result = await generateCareerAdvice(prompt);

        res.status(200).json({
            success: true,
            response: result
        });

    } catch (error) {
        console.error("Gemini Error:", error);

        res.status(500).json({
            success: false,
            message: error.message,
            details: error
        });
    }
};

module.exports = {
    getCareerAdvice
};