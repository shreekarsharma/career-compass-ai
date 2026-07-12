import { Link } from "react-router-dom";
import Button from "../components/Button";

const Landing = () => {
  return (
    <div className="min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto w-full px-6">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          {/* Left Section */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
              Build Your Career with{" "}
              <span className="text-blue-600">CareerCompass AI</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Analyze your resume, discover career opportunities, compare
              yourself with job descriptions, and receive AI-powered insights
              to improve your chances of landing your dream job.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/register">
                <Button size="lg">Get Started</Button>
              </Link>

              <Link to="/login">
                <Button variant="outline" size="lg">
                  Login
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              What You Can Do
            </h2>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <span className="text-2xl">📄</span>
                <div>
                  <h3 className="font-semibold">Upload Resume</h3>
                  <p className="text-gray-600 text-sm">
                    Upload your PDF resume securely for analysis.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl">🤖</span>
                <div>
                  <h3 className="font-semibold">AI Resume Analysis</h3>
                  <p className="text-gray-600 text-sm">
                    Receive personalized feedback on your skills and resume.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl">🎯</span>
                <div>
                  <h3 className="font-semibold">Job Match</h3>
                  <p className="text-gray-600 text-sm">
                    Compare your resume with job descriptions and identify
                    missing skills.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl">📊</span>
                <div>
                  <h3 className="font-semibold">Track Progress</h3>
                  <p className="text-gray-600 text-sm">
                    View previous analyses and monitor your career growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <section className="mt-20 grid gap-6 md:grid-cols-3">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">
              Resume Analysis
            </h3>
            <p className="text-gray-600">
              Get detailed AI insights, strengths, weaknesses, and improvement
              suggestions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">
              Career Guidance
            </h3>
            <p className="text-gray-600">
              Explore suitable career paths and recommended learning roadmaps.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">
              Interview Preparation
            </h3>
            <p className="text-gray-600">
              Receive interview questions and skill recommendations based on
              your resume.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Landing;