import "dotenv/config";
import { GoogleGenAI } from "@google/genai";
import JobMatch from "../models/JobMatch.js";
import Resume from "../models/Resume.js";
import createJobPrompt from "../prompts/jobPrompt.js";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export const analyzeJobMatch = async ({ user, jobDescription }) => {
  try {
    console.log("Searching resume for user:", user);
    // Get latest uploaded resume
    const resume = await Resume.findOne({ user }).sort({
      createdAt: -1,
    });
console.log("Resume found:", resume);
    if (!resume) {
      throw new Error("Please upload a resume first.");
    }

    // Create prompt
    const prompt = createJobPrompt(
      resume.extractedText,
      jobDescription
    );

    // Gemini API call
    const response = await ai.models.generateContent({
      model: "gemini-flash-latest",
      contents: prompt,
    });

    let text = response.text;

    // Remove markdown if Gemini wraps JSON
    text = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();
console.log("========== GEMINI RESPONSE ==========");
console.log(text);
console.log("=====================================");
    const result = JSON.parse(text);

    // Save to MongoDB
    const jobMatch = await JobMatch.create({
      user,
      jobDescription,
      matchScore: result.matchScore || 0,
      matchingSkills: result.matchingSkills || [],
      missingSkills: result.missingSkills || [],
      suggestions: result.suggestions || [],
      interviewQuestions: result.interviewQuestions || [],
    });

    return jobMatch;
  } catch (error) {
    console.error("Job Match Service Error:", error);
    throw error;
  }
};

export const getJobMatches = async (user) => {
  try {
    return await JobMatch.find({ user }).sort({
      createdAt: -1,
    });
  } catch (error) {
    throw error;
  }
};