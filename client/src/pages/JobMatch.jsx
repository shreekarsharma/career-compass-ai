import { useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";


const JobMatch = () => {
 const [resume, setResume] = useState("");
const [jobDescription, setJobDescription] = useState("");
const [loading, setLoading] = useState(false);
const [matchResult, setMatchResult] = useState(null);


 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!resume || !jobDescription) {
    alert("Please enter both resume and job description.");
    return;
  }

  setLoading(true);

  try {
    const response = await fetch("http://localhost:5000/api/ai/job-match", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        resume,
        jobDescription,
      }),
    });

    const data = await response.json();

    if (!data.success) {
      throw new Error(data.message);
    }

    const result = JSON.parse(data.response);

    setMatchResult({
      score: result.matchScore,
      matchingSkills: result.matchingSkills,
      missingSkills: result.missingSkills,
      suggestions: result.suggestions,
    });

  } catch (error) {
    console.error(error);
    alert("Failed to analyze job match.");
  }

  setLoading(false);
};

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-800">
          Job Match
        </h1>
        <p className="mt-2 text-gray-600">
          Paste a job description below to compare it with your
          uploaded resume.
        </p>
      </div>
<Card title="Resume">
  <textarea
    rows="8"
    value={resume}
    onChange={(e) => setResume(e.target.value)}
    placeholder="Paste your resume here..."
    className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</Card>
      {/* Job Description Form */}
      <Card title="Job Description">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="jobDescription"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Paste Job Description
            </label>

            <textarea
              id="jobDescription"
              rows="8"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Paste the complete job description here..."
              className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <Button type="submit">
  {loading ? "Analyzing..." : "Analyze Job Match"}
</Button>
        </form>
      </Card>

      {/* Results */}
      {matchResult && (
<div className="grid gap-6 md:grid-cols-2">
        <Card title="Match Score" hover>
          <h2 className="text-6xl font-bold text-blue-600">
            {matchResult.score}%
          </h2>
        </Card>

        <Card title="Matching Skills" hover>
          <ul className="list-disc list-inside space-y-2">
            {matchResult.matchingSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </Card>

        <Card title="Missing Skills" hover>
          <ul className="list-disc list-inside space-y-2">
            {matchResult.missingSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </Card>

        <Card title="Suggestions" hover>
          <ul className="list-disc list-inside space-y-2">
            {matchResult.suggestions.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Card>
      </div>
)}
    </div>
  );
};

export default JobMatch;