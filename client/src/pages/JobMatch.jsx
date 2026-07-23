import { useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import { getJobMatch } from "../services/jobMatchService";

const JobMatch = () => {
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [matchResult, setMatchResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!jobDescription.trim()) {
      setError("Please paste a job description.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const data = await getJobMatch(jobDescription);

      setMatchResult(data);
    } catch (err) {
      setError(err.message || "Failed to analyze job match.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-800">
          Job Match
        </h1>

        <p className="mt-2 text-gray-600">
          Paste a job description below to compare it with your uploaded
          resume.
        </p>
      </div>

      <Card title="Job Description">
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            rows={8}
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Paste the complete job description here..."
            className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {error && (
            <p className="text-red-600 font-medium">
              {error}
            </p>
          )}

          <Button type="submit" disabled={loading}>
            {loading ? "Analyzing..." : "Analyze Job Match"}
          </Button>
        </form>
      </Card>

      {matchResult && (
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Match Score" hover>
            <h2 className="text-6xl font-bold text-blue-600">
              {matchResult.matchScore}%
            </h2>
          </Card>

          <Card title="Matching Skills" hover>
            <ul className="list-disc list-inside space-y-2">
              {matchResult.matchingSkills?.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </Card>

          <Card title="Missing Skills" hover>
            <ul className="list-disc list-inside space-y-2">
              {matchResult.missingSkills?.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </Card>

          <Card title="Suggestions" hover>
            <ul className="list-disc list-inside space-y-2">
              {matchResult.suggestions?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Card>

          <Card title="Interview Questions" hover>
            <ul className="list-disc list-inside space-y-2">
              {matchResult.interviewQuestions?.map((question, index) => (
                <li key={index}>{question}</li>
              ))}
            </ul>
          </Card>
        </div>
      )}
    </div>
  );
};

export default JobMatch;