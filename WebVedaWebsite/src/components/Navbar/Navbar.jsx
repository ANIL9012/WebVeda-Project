import { useState, useEffect } from "react";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Toggle mobile menu
  const toggleNavbar = () => {
    setIsOpen(prev => !prev);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setShowNavbar(false); // scroll down → hide
      } else {
        setShowNavbar(true); // scroll up → show
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark bg-dark p-0 fixed-top transition-nav ${
        showNavbar ? "nav-show" : "nav-hide"
      }`}
    >
      <div className="container p-0">
        
        {/* Logo */}
        <Link
          className="navbar-brand fw-bold fs-3"
          to="/"
          onClick={closeNavbar}
        >
          Web<span className="text-primary">Veda</span>
          <div className="fs-6 fw-normal text-light opacity-75">
            by Ankur Warikoo
          </div>
        </Link>

        {/* Hamburger */}
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={toggleNavbar}
        >
          {isOpen ? (
            <span className="fs-2 text-white">&times;</span>
          ) : (
            <span className="navbar-toggler-icon"></span>
          )}
        </button>

        {/* Menu */}
        <div
          className={`collapse navbar-collapse ${
            isOpen ? "show custom-collapse" : ""
          }`}
        >
          <ul className="navbar-nav mx-auto fw-normal gap-4 flex-column flex-lg-row align-items-center text-center">
            
            <li className="nav-item">
              <Link
                className="nav-link text-white"
                to="/"
                onClick={closeNavbar}
              >
                Courses
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link text-white"
                to="/why-webveda"
                onClick={closeNavbar}
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link text-white"
                to="/testimonials"
                onClick={closeNavbar}
              >
                Students
              </Link>
            </li>
          </ul>

          {/* Right side */}
          <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0 justify-content-center">
            <FiShoppingCart className="text-white fs-5" />

            <Link
              to="/authenticate"
              className="btn rounded-pill px-4 py-2 text-white fw-bold d-flex align-items-center gap-2"
              style={{ backgroundColor: "#4169e1" }}
              onClick={closeNavbar}
            >
              <FaArrowRightToBracket /> Log In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;