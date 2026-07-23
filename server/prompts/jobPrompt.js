const createJobPrompt = (resume, jobDescription) => `
You are an ATS Resume Analyzer.

Compare the resume with the job description.

Return ONLY valid JSON.

{
  "matchScore": 85,
  "matchingSkills": [
    "React",
    "JavaScript"
  ],
  "missingSkills": [
    "Docker",
    "AWS"
  ],
  "suggestions": [
    "Learn Docker",
    "Gain AWS experience"
  ],
  "interviewQuestions": [
    "Explain React Hooks.",
    "What is Docker?",
    "What is CI/CD?"
  ]
}

Resume:
${resume}

Job Description:
${jobDescription}
`;

export default createJobPrompt;