import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/software-solutions.png";
import NavBarComponent from "../components/NavBarComponent";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <>
      <NavBarComponent />

      {/* Hero Section */}
      <div className="row align-items-center">
        <div className="col-md-6">
          <h1 className="display-4 fw-bold">
            Hire a{" "}
            <span style={{ color: "#14E0A1" }}>Top-Tier Software Team </span>
            for your Project
          </h1>
          <p className="mt-4 text-secondary">
            <strong className="text-white">
              Stop the endless hiring hunt and skyrocketing costs;
            </strong>{" "}
            We have a team of skilled developers, designers, and marketing
            professionals to deliver low-cost, high-quality work. Save your
            hiring time and money.
          </p>
          <button
            className="btn btn-success btn-hover mt-4 text-black fw-semibold px-4 py-2"
            style={{ backgroundColor: "#14E0A1" }}
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </button>
        </div>

        <div className="col-md-6 position-relative" style={{ height: "500px" }}>
          <img
            src={logo}
            alt="Logo"
            className="position-absolute top-0 start-0 w-100 h-100 object-fit-contain"
          />
        </div>
      </div>
    </>
  );
}
