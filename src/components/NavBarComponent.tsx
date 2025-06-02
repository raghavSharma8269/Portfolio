import { useNavigate } from "react-router-dom";
import { useState } from "react";
const NavBarComponent = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    // Navigation Bar Component
    <nav className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-5">
      {/* Company Name */}
      <div
        className="fs-3 fw-bold btn-hover"
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        Software <span style={{ color: "#14E0A1" }}>Solutions</span>
      </div>

      {/*
  Navbar Code Explanation:

  - This section defines the top navigation bar including the logo, navigation links, and the "Contact Us" button.
  - On mdesktop, the navigation links are shown inline using Bootstrap's 'd-md-flex' class.
  - On mobile, the links are hidden by default, and a hamburger (☰) toggle button is shown instead.
  - Clicking the toggle button updates the 'menuOpen' state (controlled via React useState).
  - When 'menuOpen' is true, the mobile navigation links are displayed vertically in a flex-column layout.
  - The "Contact Us" button is shown:
      - Inline with links on desktop
      - Inside the mobile dropdown menu when opened
  - All links and buttons that navigate between pages use React Router’s 'useNavigate' to handle routing without a full page reload.
*/}

      {/* Toggle Button (visible on mobile) */}
      <button
        className="btn d-md-none mt-3 text-white" // the class name d(display)-md(medium sized screen >=768 px)-none(do not display) means that the hamburger icon will not be dispalyed on screens larger than 768 px
        onClick={() => setMenuOpen(!menuOpen)} // toggles the menuOpen state
      >
        ☰
      </button>

      {/* DESKTOP NAV - always visible on md+ */}
      <div className="d-none d-md-flex gap-4">
        {/* the class name d-none means that the links will not be displayed on screens smaller than 768 px */}
        <a
          href="/services"
          className="text-white text-decoration-none nav-bar-link"
        >
          Services
        </a>
        <a
          href="/portfolio"
          className="text-white text-decoration-none nav-bar-link"
        >
          Portfolio
        </a>
        <a
          href="/about"
          className="text-white text-decoration-none nav-bar-link"
        >
          About Us
        </a>
        <a
          href="/contact"
          className="text-white text-decoration-none nav-bar-link"
        >
          Contact
        </a>
      </div>

      {/* MOBILE NAV - only visible when menuOpen is true */}
      {menuOpen && (
        <div className="d-flex d-md-none flex-column gap-3 mt-3">
          <a
            href="/services"
            className="text-white text-decoration-none nav-bar-link"
          >
            Services
          </a>
          <a
            href="/portfolio"
            className="text-white text-decoration-none nav-bar-link"
          >
            Portfolio
          </a>
          <a
            href="/about"
            className="text-white text-decoration-none nav-bar-link"
          >
            About Us
          </a>
          <a
            href="/contact"
            className="text-white text-decoration-none nav-bar-link"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavBarComponent;
