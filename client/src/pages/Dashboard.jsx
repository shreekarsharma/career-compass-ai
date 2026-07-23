import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/Button";
import { getResumeHistory,deleteResume } from "../services/dashboardService";

const Dashboard = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const data = await getResumeHistory();
      setHistory(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
  if (!window.confirm("Delete this resume?")) return;

  await deleteResume(id);

  setHistory((prev) =>
    prev.filter((resume) => resume._id !== id)
  );
};

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <section>
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome to CareerCompass AI
        </h1>

        <p className="mt-2 text-gray-600">
          Upload your resume, analyze your skills, and discover career
          opportunities with AI.
        </p>
      </section>

      {/* Quick Actions */}
      <section className="grid gap-6 md:grid-cols-2">
        <Card title="Resume Analysis" hover>
          <p className="text-gray-600 mb-4">
            Upload your resume and receive an AI-powered analysis.
          </p>

          <Link to="/resume-upload">
            <Button>Upload Resume</Button>
          </Link>
        </Card>

        <Card title="Job Match" hover>
          <p className="text-gray-600 mb-4">
            Compare your resume with a job description and view your match score.
          </p>

          <Link to="/job-match">
            <Button variant="success">Start Job Match</Button>
          </Link>
        </Card>
      </section>

      {/* Resume History */}
      <section>
        <Card title="Resume History">
          {loading ? (
            <p className="text-gray-500">Loading...</p>
          ) : history.length > 0 ? (
            <div className="space-y-4">
              {history.map((resume) => (
                <div
                  key={resume._id}
                  className="flex items-center justify-between border-b pb-3"
                >
                  <div>
                    <h3 className="font-medium text-gray-800">
                      {resume.fileName}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {new Date(resume.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                <div className="flex gap-3">
                  <Button
                  size="sm"
                  variant="danger"
                  onClick={() => handleDelete(resume._id)}
                >
                  Delete
                </Button>
                  <Link to="/resume-analysis">
                    <Button size="sm" variant="outline">
                      View
                    </Button>
                  </Link>
                </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">
              No uploaded resumes found.
            </p>
          )}
        </Card>
      </section>
    </div>
  );
};

export default Dashboard;