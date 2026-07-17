import { Link } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/Button";

const Dashboard = () => {
  // Temporary data (replace with API data later)
  const history = [
    {
      id: 1,
      fileName: "Resume_Frontend.pdf",
      date: "12 Jul 2026",
    },
    {
      id: 2,
      fileName: "Resume_Developer.pdf",
      date: "08 Jul 2026",
    },
  ];

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
            Compare your resume with a job description and view your match
            score.
          </p>

          <Link to="/job-match">
            <Button variant="success">Start Job Match</Button>
          </Link>
        </Card>
      </section>

      {/* Resume History */}
      <section>
        <Card title="Resume History">
          {history.length > 0 ? (
            <div className="space-y-4">
              {history.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b pb-3"
                >
                  <div>
                    <h3 className="font-medium text-gray-800">
                      {item.fileName}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {item.date}
                    </p>
                  </div>

                  <Link to="/resume-analysis">
                    <Button size="sm" variant="outline">
                      View
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">
              No resume analyses available yet.
            </p>
          )}
        </Card>
      </section>
    </div>
  );
};

export default Dashboard;