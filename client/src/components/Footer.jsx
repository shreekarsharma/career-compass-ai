import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            CareerCompass AI
          </h2>
          <p className="mt-3 text-sm leading-6">
            AI-powered career guidance to help you analyze your resume,
            discover career opportunities, and improve your job match.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="hover:text-white transition">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/resume-upload" className="hover:text-white transition">
                Upload Resume
              </Link>
            </li>
            <li>
              <Link to="/job-match" className="hover:text-white transition">
                Job Match
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Contact
          </h3>
          <p>Email: support@careercompass.ai</p>
          <p>Phone: +91 98765 43210</p>
          <p className="mt-2">
            Helping students and professionals build better careers.
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 py-4 text-center text-sm">
        © {year} CareerCompass AI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;