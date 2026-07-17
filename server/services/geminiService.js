const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

async function generateCareerAdvice(prompt) {
    try {
        const response = await ai.models.generateContent({
           model: "models/gemini-flash-latest",
            contents: prompt,
        });

        return response.text;
    } catch (error) {
        console.error("Gemini Service Error:", error);
        throw error;
    }
}

module.exports = { generateCareerAdvice };