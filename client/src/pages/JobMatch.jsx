import { useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import Input from "../components/Input";

const JobMatch = () => {
  const [jobDescription, setJobDescription] = useState("");

  // Temporary data (replace with API response later)
  const matchResult = {
    score: 85,
    matchingSkills: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Git",
    ],
    missingSkills: [
      "Docker",
      "AWS",
      "TypeScript",
    ],
    suggestions: [
      "Learn Docker fundamentals.",
      "Gain experience with AWS cloud services.",
      "Add TypeScript projects to your portfolio.",
    ],
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(jobDescription);
    // Connect to API later
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
            Analyze Job Match
          </Button>
        </form>
      </Card>

      {/* Results */}
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
    </div>
  );
};

export default JobMatch;