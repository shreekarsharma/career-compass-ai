import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `transition-colors duration-200 ${
      isActive
        ? "text-blue-600 font-semibold"
        : "text-gray-700 hover:text-blue-600"
    }`;

  const mobileNavLinkClass = ({ isActive }) =>
    `block py-2 transition-colors duration-200 ${
      isActive
        ? "text-blue-600 font-semibold"
        : "text-gray-700 hover:text-blue-600"
    }`;

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    navigate("/login");
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to={isAuthenticated ? "/dashboard" : "/"}
          className="text-xl md:text-2xl font-bold text-blue-600"
          onClick={closeMenu}
        >
          CareerCompass AI
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {!isAuthenticated ? (
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
          ) : (
            <>
              <NavLink to="/dashboard" className={navLinkClass}>
                Dashboard
              </NavLink>

              <NavLink to="/resume-upload" className={navLinkClass}>
                Upload Resume
              </NavLink>

              <NavLink to="/resume-analysis" className={navLinkClass}>
                Resume Analysis
              </NavLink>

              <NavLink to="/job-match" className={navLinkClass}>
                Job Match
              </NavLink>

              <NavLink to="/profile" className={navLinkClass}>
                Profile
              </NavLink>
            </>
          )}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {!isAuthenticated ? (
            <>
              <Link
                to="/login"
                className="px-4 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 transition"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Register
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t bg-white px-4 py-4">
          <div className="flex flex-col space-y-3">
            {!isAuthenticated ? (
              <>
                <NavLink
                  to="/"
                  className={mobileNavLinkClass}
                  onClick={closeMenu}
                >
                  Home
                </NavLink>

                <Link
                  to="/login"
                  onClick={closeMenu}
                  className="w-full text-center px-4 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 transition"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  onClick={closeMenu}
                  className="w-full text-center px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                <NavLink
                  to="/dashboard"
                  className={mobileNavLinkClass}
                  onClick={closeMenu}
                >
                  Dashboard
                </NavLink>

                <NavLink
                  to="/resume-upload"
                  className={mobileNavLinkClass}
                  onClick={closeMenu}
                >
                  Upload Resume
                </NavLink>

                <NavLink
                  to="/resume-analysis"
                  className={mobileNavLinkClass}
                  onClick={closeMenu}
                >
                  Resume Analysis
                </NavLink>

                <NavLink
                  to="/job-match"
                  className={mobileNavLinkClass}
                  onClick={closeMenu}
                >
                  Job Match
                </NavLink>

                <NavLink
                  to="/profile"
                  className={mobileNavLinkClass}
                  onClick={closeMenu}
                >
                  Profile
                </NavLink>

                <button
                  onClick={handleLogout}
                  className="mt-2 w-full px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;