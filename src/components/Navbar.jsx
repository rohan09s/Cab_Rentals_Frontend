import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/iim.jpg";

const Navbar = ({ showFull = true }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Home", "Packages", "Contact"];

  const scrollToSection = (sectionId) => {
    // If not on home page, navigate to home first
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleNavClick = (item) => {
    switch (item) {
      case "Home":
        scrollToSection("home");
        break;
      case "Packages":
        scrollToSection("packages");
        break;
      case "Contact":
        scrollToSection("contact");
        break;
      default:
        break;
    }
    setOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-lg" : "shadow-sm"
      }`}
    >
      {/* Top accent bar */}
      <div
        style={{
          height: "3px",
          background:
            "linear-gradient(to right, #1e3a8a, #2563eb, #dc2626)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <button
            type="button"
            onClick={() => {
              navigate("/");
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 md:gap-3 text-left"
          >
            <img
              src={logo}
              alt="Amit Tours"
              className="h-8 md:h-10 w-8 md:w-10 object-cover rounded-lg border border-gray-200 shadow-sm flex-shrink-0"
            />
            <div className="min-w-0">
              <h1 className="font-bold text-blue-900 text-xs sm:text-sm md:text-base tracking-wide leading-tight truncate">
                Amit Tours & Travels
              </h1>
            </div>
          </button>

          {/* Desktop Links */}
          {showFull && (
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className="text-sm font-semibold text-gray-600 hover:text-blue-800 transition-colors duration-200"
                >
                  {item}
                </button>
              ))}

              <div className="w-px h-6 bg-gray-200" />

              {/* Call Button */}
              <a
                href="tel:7709040404"
                className="flex items-center gap-2 text-white text-sm font-bold px-5 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 transition-all duration-200"
              >
                📞 7709040404
              </a>
            </div>
          )}

          {/* Mobile Menu Toggle */}
          {showFull && (
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors text-blue-900 font-bold text-lg touch-none"
              aria-label="Toggle menu"
            >
              {open ? "✕" : "☰"}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {showFull && open && (
        <div className="md:hidden border-t border-gray-100 bg-gray-50 px-3 py-2 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className="w-full text-left px-4 py-3 text-sm font-semibold text-gray-700 hover:text-blue-800 hover:bg-white active:bg-gray-100 rounded-lg transition-colors duration-150"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;