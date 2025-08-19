import "./SinglePagePortfolio.css";
import JobVaultImage from "../assets/projectImages/JobVaultLightPurple.svg";
import OverCoffeeImage from "../assets/projectImages/overCoffeeCreme-D_-bYlWA.svg";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const SinglePagePortfolio = () => {
  const [init, setInit] = useState(false);
  const [sectionsVisible, setSectionsVisible] = useState({
    hero: false,
    about: false,
    services: false,
    portfolio: false,
    contact: false,
  });

  // Initialize particles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Animation observer for sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setSectionsVisible((prev) => ({
              ...prev,
              [sectionId]: true,
            }));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    // Observe all sections
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    // Trigger hero animation immediately
    setSectionsVisible((prev) => ({ ...prev, hero: true }));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  // Sparkling stars configuration
  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "bubble",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          bubble: {
            distance: 200,
            duration: 2,
            opacity: 1,
            size: 8,
          },
        },
      },
      particles: {
        color: {
          value: ["#14E0A1", "#00bcd4", "#ffffff"],
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: true,
          speed: 0.7,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 100,
        },
        opacity: {
          value: { min: 0.3, max: 1 },
          animation: {
            enable: true,
            speed: 0.7,
            sync: false,
          },
        },
        shape: {
          type: ["star", "circle"],
        },
        size: {
          value: { min: 1, max: 4 },
          animation: {
            enable: true,
            speed: 0.7,
            sync: false,
          },
        },
        twinkle: {
          particles: {
            enable: true,
            frequency: 0.05,
            opacity: 1,
            color: {
              value: "#14E0A1",
            },
          },
        },
      },
      detectRetina: true,
    }),
    []
  );
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="position-relative">
      {/* TSParticles Background */}
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />
      )}

      {/* Navigation */}
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top border-bottom"
        style={{ backgroundColor: "#0B0F2F", zIndex: 1000 }}
      >
        <div className="container">
          <a
            className="navbar-brand fw-bold fs-3"
            href="#hero"
            style={{ color: "#14E0A1" }}
          >
            Raghav Sharma
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link text-white"
                  onClick={() => scrollToSection("hero")}
                >
                  Home
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link text-white"
                  onClick={() => scrollToSection("about")}
                >
                  About
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link text-white"
                  onClick={() => scrollToSection("services")}
                >
                  Skills
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link text-white"
                  onClick={() => scrollToSection("portfolio")}
                >
                  Portfolio
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link text-white"
                  onClick={() => scrollToSection("contact")}
                >
                  Contact
                </button>
              </li>

              {/* Social Icons */}
              <li className="nav-item ms-3">
                <a
                  href="https://github.com/raghavSharma8269"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link text-white d-inline-flex align-items-center"
                  style={{ padding: "8px 12px" }}
                >
                  <i className="bi bi-github fs-5"></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://www.linkedin.com/in/raghav-sharma-884750307/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link text-white d-inline-flex align-items-center"
                  style={{ padding: "8px 12px" }}
                >
                  <i className="bi bi-linkedin fs-5"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className={`min-vh-100 d-flex align-items-center position-relative ${
          sectionsVisible.hero
            ? "animate__animated animate__fadeInUp"
            : "opacity-0"
        }`}
        style={{ paddingTop: "80px", animationDuration: "1s" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div
              className={`col-lg-6 ${
                sectionsVisible.hero
                  ? "animate__animated animate__fadeInLeft"
                  : "opacity-0"
              }`}
              style={{ animationDelay: "0.3s", animationDuration: "1s" }}
            >
              <h1 className="display-3 fw-bold lh-1 mb-4">
                Hi, I'm <span style={{ color: "#14E0A1" }}>Raghav Sharma</span>{" "}
                - Full Stack Developer
              </h1>
              <p className="fs-5 text-white mb-4">
                <strong className="text-white">
                  Passionate about creating innovative software solutions.
                </strong>{" "}
                I specialize in building modern web applications using React,
                TypeScript, Java, and Spring Boot. I deliver high-quality,
                scalable solutions that solve real-world problems.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3">
                <button
                  onClick={() => scrollToSection("portfolio")}
                  className="btn btn-lg fw-semibold px-4 py-3"
                  style={{ backgroundColor: "#14E0A1", color: "black" }}
                >
                  View My Work
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="btn btn-outline-light btn-lg fw-semibold px-4 py-3"
                  style={{ borderColor: "#14E0A1" }}
                >
                  Get In Touch
                </button>
              </div>
            </div>
            <div
              className={`col-lg-6 mt-5 mt-lg-0 text-center ${
                sectionsVisible.hero
                  ? "animate__animated animate__fadeInRight"
                  : "opacity-0"
              }`}
              style={{ animationDelay: "0.6s", animationDuration: "1s" }}
            >
              <div className="position-relative">
                <div
                  className="rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center"
                  style={{
                    width: "200px",
                    height: "200px",
                    background:
                      "linear-gradient(135deg, #14E0A1 0%, #00bcd4 100%)",
                    animation: "pulse 2s infinite",
                  }}
                >
                  <i
                    className="bi bi-code-slash"
                    style={{ fontSize: "6rem", color: "white" }}
                  />
                </div>
                <h3 className="fs-4 fw-bold" style={{ color: "#14E0A1" }}>
                  Excellence in Code
                </h3>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <button
              className="btn btn-link text-white fs-1"
              onClick={() => scrollToSection("about")}
              style={{
                textDecoration: "none",
                animation: "bounce 2s infinite",
              }}
            >
              <i className="bi bi-arrow-down-circle" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className={`py-5 position-relative ${
          sectionsVisible.about
            ? "animate__animated animate__fadeInUp"
            : "opacity-0"
        }`}
        style={{ animationDuration: "1s" }}
      >
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold mb-4" style={{ color: "#14E0A1" }}>
              About Me
            </h2>
            <p
              className="fs-5 text-white mx-auto"
              style={{ maxWidth: "800px" }}
            >
              I'm a passionate full-stack developer with a love for creating
              innovative software solutions. I believe in writing clean,
              efficient code and delivering exceptional user experiences that
              make a real impact.
            </p>
          </div>

          <div
            className={`row g-4 mt-5 ${
              sectionsVisible.about
                ? "animate__animated animate__fadeInUp"
                : "opacity-0"
            }`}
            style={{ animationDelay: "0.3s", animationDuration: "1s" }}
          >
            <div className="col-md-6 col-lg-3 text-center">
              <div
                className="rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center"
                style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: "#14E0A1",
                }}
              >
                <span className="fs-3 text-dark">🤝</span>
              </div>
              <h5 className="fw-bold">Problem Solving</h5>
              <p className="text-white">
                I love tackling complex challenges and finding elegant solutions
                to technical problems.
              </p>
            </div>
            <div className="col-md-6 col-lg-3 text-center">
              <div
                className="rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center"
                style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: "#14E0A1",
                }}
              >
                <span className="fs-3 text-dark">💡</span>
              </div>
              <h5 className="fw-bold">Innovation</h5>
              <p className="text-white">
                I stay current with latest technologies and embrace creative
                approaches to development.
              </p>
            </div>
            <div className="col-md-6 col-lg-3 text-center">
              <div
                className="rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center"
                style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: "#14E0A1",
                }}
              >
                <span className="fs-3 text-dark">🎯</span>
              </div>
              <h5 className="fw-bold">User-Focused</h5>
              <p className="text-white">
                I prioritize creating intuitive, accessible experiences that
                users love to interact with.
              </p>
            </div>
            <div className="col-md-6 col-lg-3 text-center">
              <div
                className="rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center"
                style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: "#14E0A1",
                }}
              >
                <span className="fs-3 text-dark">🚀</span>
              </div>
              <h5 className="fw-bold">Continuous Learning</h5>
              <p className="text-white">
                I'm always learning new technologies and improving my skills to
                deliver better solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className={`py-5 position-relative ${
          sectionsVisible.services
            ? "animate__animated animate__fadeInUp"
            : "opacity-0"
        }`}
        style={{ animationDuration: "1s" }}
      >
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold mb-4" style={{ color: "#14E0A1" }}>
              My Skills
            </h2>
            <p
              className="fs-5 text-white mx-auto"
              style={{ maxWidth: "600px" }}
            >
              I specialize in full-stack development with a focus on modern,
              scalable solutions
            </p>
          </div>

          <div
            className={`row g-4 ${
              sectionsVisible.services
                ? "animate__animated animate__fadeInUp"
                : "opacity-0"
            }`}
            style={{ animationDelay: "0.3s", animationDuration: "1s" }}
          >
            <div className="col-md-6 col-lg-4">
              <div className="card bg-dark border-white h-100 hover-card">
                <div className="card-body p-4">
                  <div className="mb-3">
                    <span className="fs-1">💻</span>
                  </div>
                  <h5 className="card-title fw-bold mb-3 text-white">
                    Frontend Development
                  </h5>
                  <p className="card-text text-white">
                    React, TypeScript, HTML5, CSS3, Bootstrap, and modern
                    JavaScript frameworks for creating responsive, interactive
                    user interfaces.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card bg-dark border-white h-100 hover-card">
                <div className="card-body p-4">
                  <div className="mb-3">
                    <span className="fs-1">⚙️</span>
                  </div>
                  <h5 className="card-title fw-bold mb-3 text-white">
                    Backend Development
                  </h5>
                  <p className="card-text text-white">
                    Java, Spring Boot, REST APIs, SQL, Database Design, and
                    server-side development for robust, scalable applications.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card bg-dark border-white h-100 hover-card">
                <div className="card-body p-4">
                  <div className="mb-3">
                    <span className="fs-1">🛠️</span>
                  </div>
                  <h5 className="card-title fw-bold mb-3 text-white">
                    Development Tools
                  </h5>
                  <p className="card-text text-white">
                    Git, Docker, AWS, Postman, VS Code, IntelliJ IDEA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        id="portfolio"
        className={`py-5 position-relative ${
          sectionsVisible.portfolio
            ? "animate__animated animate__fadeInUp"
            : "opacity-0"
        }`}
        style={{ animationDuration: "1s" }}
      >
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold mb-4" style={{ color: "#14E0A1" }}>
              My Portfolio
            </h2>
            <p
              className="fs-5 text-white mx-auto"
              style={{ maxWidth: "700px" }}
            >
              Here are some of the projects I've built that showcase my skills
              and passion for development
            </p>
          </div>

          <div className="text-center mb-4">
            <p className="text-white mx-auto" style={{ maxWidth: "800px" }}>
              Each project represents a unique challenge I've tackled, from
              concept to deployment. I focus on creating applications that are
              not only functional but also provide exceptional user experiences.
            </p>
          </div>

          <div className="text-center mb-5">
            <h3 className="fs-3 fw-bold">Featured Projects</h3>
          </div>

          {/* Projects Container with Gap */}
          <div
            className={`row justify-content-center g-5 ${
              sectionsVisible.portfolio
                ? "animate__animated animate__fadeInUp"
                : "opacity-0"
            }`}
            style={{ animationDelay: "0.3s", animationDuration: "1s" }}
          >
            {/* First Project */}
            <div className="col-lg-10">
              <div className="card bg-dark border-white">
                <div className="card-body p-4">
                  <div className="row align-items-center">
                    <div className="col-lg-6 text-center mb-4 mb-lg-0">
                      <div className="rounded p-5">
                        <img
                          src={OverCoffeeImage}
                          alt="OverCoffeeAI Project"
                          className="img-fluid rounded"
                          style={{ maxWidth: "100%", height: "auto" }}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <h4 className="fw-bold mb-3" style={{ color: "#14E0A1" }}>
                        OverCoffeeAI
                      </h4>
                      <p className="text-white mb-4">
                        At Over Coffee, I led the backend engineering efforts
                        for a mental health and AI platform built from the
                        ground up. I was responsible for designing and
                        implementing a scalable backend architecture using Java
                        and Spring Boot, with a focus on clean code, modularity,
                        and long term maintainability. I built and secured our
                        authentication system, developed custom RESTful APIs to
                        connect with the frontend, and integrated a PostgreSQL
                        database for persistent user data storage.
                        <br />
                        <br /> I also worked closely with the frontend team to
                        ensure seamless communication between services,
                        troubleshoot integration challenges, and deploy the
                        application to a cloud environment using Render. My work
                        helped ensure the platform’s core functionality was
                        stable, efficient, and production ready.
                      </p>
                      <a
                        href="https://overcoffee.ai/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn fw-semibold px-4 py-2"
                        style={{ backgroundColor: "#14E0A1", color: "black" }}
                      >
                        View Project →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Project */}
            <div className="col-lg-10">
              <div className="card bg-dark border-white">
                <div className="card-body p-4">
                  <div className="row align-items-center">
                    <div className="col-lg-6 text-center mb-4 mb-lg-0">
                      <div className="rounded p-5">
                        <img
                          src={JobVaultImage}
                          alt="JobVault Project"
                          className="img-fluid rounded"
                          style={{ maxWidth: "100%", height: "auto" }}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <h4 className="fw-bold mb-3" style={{ color: "#14E0A1" }}>
                        JobVault
                      </h4>
                      <p className="text-white mb-4">
                        JobVault is a comprehensive web application I developed
                        to help job seekers organize and track their
                        applications. Features include resume and cover letter
                        management, application status tracking, and intuitive
                        dashboard views. Built with Java, Spring Boot, React,
                        and TypeScript.
                      </p>
                      <a
                        href="https://job-vault-livid.vercel.app/welcome"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn fw-semibold px-4 py-2"
                        style={{ backgroundColor: "#14E0A1", color: "black" }}
                      >
                        View Project →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={`py-5 position-relative ${
          sectionsVisible.contact
            ? "animate__animated animate__fadeInUp"
            : "opacity-0"
        }`}
        style={{ animationDuration: "1s" }}
      >
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold mb-4" style={{ color: "#14E0A1" }}>
              Let's Connect
            </h2>
            <p className="fs-5 text-white">
              I'm always interested in new opportunities and collaborations.
              Feel free to reach out if you'd like to discuss a project or just
              say hello!
            </p>
          </div>

          <div className="row justify-content-center">
            <div
              className={`col-md-8 ${
                sectionsVisible.contact
                  ? "animate__animated animate__fadeInUp"
                  : "opacity-0"
              }`}
              style={{ animationDelay: "0.3s", animationDuration: "1s" }}
            >
              <div className="row g-4">
                {/* Email Card */}
                <div className="col-md-6">
                  <div className="card bg-dark border-white h-100 hover-card text-center">
                    <div className="card-body p-4 d-flex flex-column justify-content-center">
                      <div className="mb-3">
                        <i
                          className="bi bi-envelope-fill"
                          style={{ fontSize: "3rem", color: "#14E0A1" }}
                        ></i>
                      </div>
                      <h5 className="card-title fw-bold mb-3">Email</h5>
                      <p className="card-text text-white mb-3">
                        Reach me at my email
                      </p>
                      <a
                        href="mailto:r.sharmali2023@gmail.com"
                        className="btn fw-semibold px-4 py-2"
                        style={{ backgroundColor: "#14E0A1", color: "black" }}
                      >
                        r.sharmali2023@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* LinkedIn Card */}
                <div className="col-md-6">
                  <div className="card bg-dark border-white h-100 hover-card text-center">
                    <div className="card-body p-4 d-flex flex-column justify-content-center">
                      <div className="mb-3">
                        <i
                          className="bi bi-linkedin"
                          style={{ fontSize: "3rem", color: "#14E0A1" }}
                        ></i>
                      </div>
                      <h5 className="card-title fw-bold mb-3">LinkedIn</h5>
                      <p className="card-text text-white mb-3">
                        Connect with me professionally
                      </p>
                      <a
                        href="https://www.linkedin.com/in/raghav-sharma-884750307/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn fw-semibold px-4 py-2"
                        style={{ backgroundColor: "#14E0A1", color: "black" }}
                      >
                        View LinkedIn Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-4 position-relative"
        style={{ backgroundColor: "#0B0F2F", borderRadius: "100px" }}
      >
        <div className="container text-center">
          <div className="mb-3">
            <span className="fw-bold fs-4" style={{ color: "#14E0A1" }}>
              Raghav Sharma
            </span>
          </div>
          <p className="text-white mb-0">
            © 2025 Raghav Sharma. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SinglePagePortfolio;
