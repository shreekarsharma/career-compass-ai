import "dotenv/config";
import { GoogleGenAI } from "@google/genai";

import { getLatestResume } from "./resumeService.js";
import createResumePrompt from "../prompts/resumePrompt.js";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export const analyzeResume = async (userId) => {
  try {
    // Get latest uploaded resume
    const resume = await getLatestResume(userId);

    if (!resume) {
      throw new Error("Please upload a resume first.");
    }

    // Create Gemini prompt
    const prompt = createResumePrompt(resume.extractedText);

    // Gemini API call
    const response = await ai.models.generateContent({
      model: "gemini-flash-latest",
      contents: prompt,
    });
console.log(response);

    let text = response.text;

    // Remove markdown if Gemini adds it
    text = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    console.log("========== RESUME ANALYSIS ==========");
    console.log(text);
    console.log("====================================");

    // Parse JSON
    const result = JSON.parse(text);

    return result;
  } catch (error) {
    console.error("Resume Analysis Error:", error);
    throw error;
  }
};