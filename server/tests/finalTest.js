import dotenv from "dotenv";
import connectDB from "../config/db.js";

import { createUser, getUserById } from "../services/userService.js";
import { saveResumeAnalysis, getResumeHistory, deleteResumeAnalysis } from "../services/resumeService.js";
import { saveJobMatch, getJobMatches } from "../services/jobMatchService.js";

dotenv.config();

const finalTest = async () => {

    try {
        await connectDB();

        console.log("\n===== USER TEST =====");

        // 1. Create User
        const user = await createUser({
            name: "Test User",
            email: "testuser@example.com",
            password: "123456"
        });

        console.log("User Created:");
        console.log(user);


        // 2. Read User
        const foundUser = await getUserById(user._id);

        console.log("User Found:");
        console.log(foundUser);



        console.log("\n===== RESUME TEST =====");

        // 3. Save Resume Analysis
        const resume = await saveResumeAnalysis({
            resumeFileName: "final_test_resume.pdf",
            summary: "Test resume analysis",
            skills: ["Java", "MongoDB"],
            strengths: ["Problem Solving"],
            weaknesses: ["Communication"],
            missingSkills: ["React"],
            careerPaths: ["Full Stack Developer"],
            learningRoadmap: "Learn React and improve frontend skills.",
            recommendedCourses: ["MERN Course"],
            interviewQuestions: ["Explain OOP"]
        });

        console.log("Resume Saved:");
        console.log(resume);


        // 4. Read Resume History
        const resumeHistory = await getResumeHistory();

        console.log("Resume History:");
        console.log(resumeHistory);



        console.log("\n===== JOB MATCH TEST =====");

        // 5. Save Job Match
        const jobMatch = await saveJobMatch({
            jobDescription: "Java Developer required",
            matchScore: 90,
            matchingSkills: ["Java", "MongoDB"],
            missingSkills: ["Spring Boot"],
            suggestions: ["Learn Spring Boot"],
            interviewQuestions: ["Explain Java Collections"]
        });

        console.log("Job Match Saved:");
        console.log(jobMatch);


        // 6. Read Job Matches
        const matches = await getJobMatches();

        console.log("Job Matches:");
        console.log(matches);


        console.log("\n===== DELETE TEST =====");

        // 7. Delete Resume Analysis
        const deleted = await deleteResumeAnalysis(resume._id);

        console.log("Deleted Resume:");
        console.log(deleted);


        process.exit();

    } catch(error) {
        console.log(error);
        process.exit(1);
    }
};

finalTest();