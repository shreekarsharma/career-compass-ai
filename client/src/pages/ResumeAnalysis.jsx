import Card from "../components/Card";

const ResumeAnalysis = () => {
  // Temporary data (replace with API response later)
  const analysis = {
    summary:
      "You have a solid foundation in frontend development with experience in React, JavaScript, and responsive web design.",

    skills: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Git",
    ],

    strengths: [
      "Strong frontend development skills.",
      "Good understanding of responsive design.",
      "Experience using React components.",
    ],

    improvements: [
      "Add more real-world projects.",
      "Improve resume formatting.",
      "Highlight measurable achievements.",
    ],

    missingSkills: [
      "Docker",
      "TypeScript",
      "AWS",
    ],

    careerPaths: [
      "Frontend Developer",
      "React Developer",
      "UI Engineer",
    ],

    learningRoadmap: [
      "Learn TypeScript.",
      "Study Docker fundamentals.",
      "Explore cloud deployment with AWS.",
      "Build full-stack React applications.",
    ],

    courses: [
      "Advanced React",
      "TypeScript for Beginners",
      "Docker Essentials",
    ],

    interviewQuestions: [
      "What are React Hooks?",
      "Explain the Virtual DOM.",
      "Difference between let, const, and var.",
      "What is state management in React?",
    ],
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-800">
          Resume Analysis
        </h1>

        <p className="mt-2 text-gray-600">
          AI-generated insights based on your uploaded resume.
        </p>
      </div>

      {/* Summary */}
      <Card title="Summary">
        <p className="text-gray-700">{analysis.summary}</p>
      </Card>

      {/* Grid Sections */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card title="Skills" hover>
          <ul className="list-disc list-inside space-y-2">
            {analysis.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </Card>

        <Card title="Strengths" hover>
          <ul className="list-disc list-inside space-y-2">
            {analysis.strengths.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>

        <Card title="Areas for Improvement" hover>
          <ul className="list-disc list-inside space-y-2">
            {analysis.improvements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>

        <Card title="Missing Skills" hover>
          <ul className="list-disc list-inside space-y-2">
            {analysis.missingSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </Card>

        <Card title="Recommended Career Paths" hover>
          <ul className="list-disc list-inside space-y-2">
            {analysis.careerPaths.map((path) => (
              <li key={path}>{path}</li>
            ))}
          </ul>
        </Card>

        <Card title="Learning Roadmap" hover>
          <ol className="list-decimal list-inside space-y-2">
            {analysis.learningRoadmap.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </Card>

        <Card title="Recommended Courses" hover>
          <ul className="list-disc list-inside space-y-2">
            {analysis.courses.map((course) => (
              <li key={course}>{course}</li>
            ))}
          </ul>
        </Card>

        <Card title="Interview Questions" hover>
          <ul className="list-disc list-inside space-y-2">
            {analysis.interviewQuestions.map((question) => (
              <li key={question}>{question}</li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default ResumeAnalysis;