const createJobPrompt = (resume, jobDescription) => `
You are an ATS Resume Analyzer.

Compare the following resume with the job description.

Resume:
${resume}

Job Description:
${jobDescription}

Return ONLY valid JSON in this exact format:

{
  "matchScore": 85,
  "matchingSkills": [
    "Java",
    "Spring Boot"
  ],
  "missingSkills": [
    "Docker",
    "AWS"
  ],
  "suggestions": [
    "Learn Docker",
    "Add more cloud experience"
  ]
}
`;

module.exports = createJobPrompt;