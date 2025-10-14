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
import {
  // Backend Technologies
  JavaIcon,
  SpringIcon,
  PostgresIcon,
  CSharpIcon,
  DotNetIcon,
  PythonIcon,
  FastAPIIcon,
  // Frontend Technologies
  ReactIcon,
  JavaScriptIcon,
  TypeScriptIcon,
  HtmlIcon,
  CssIcon,
  // Development Tools
  GitIcon,
  DockerIcon,
  AwsIcon,
  PostmanIcon,
  VsCodeIcon,
  IntellijIcon,
} from "../components/TechIcons";

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
              </h1>
              <p className="fs-5 text-white mb-4">
                <strong className="text-white">
                  Passionate about creating software.
                </strong>{" "}
                I specialize in building backends using, Java Spring Boot and
                have expriece in React and Typescript frontends.
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
              <div className="position-relative"></div>
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
              I specialize in backend development with a focus on modern,
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
                    <span className="fs-1">⚙️</span>
                  </div>
                  <h5 className="card-title fw-bold mb-3 text-white">
                    Backend Development
                  </h5>
                  <p className="card-text text-white mb-3">
                    Server-side development, APIs, databases, and scalable
                    backend architecture for robust applications.
                  </p>

                  {/* Backend Technology Pills */}
                  <div className="d-flex flex-wrap gap-2">
                    <div className="d-flex align-items-center bg-secondary rounded-pill px-3 py-2">
                      <JavaIcon width={18} height={18} />
                      <span className="text-white ms-2 small">Java</span>
                    </div>
                    <div className="d-flex align-items-center bg-secondary rounded-pill px-3 py-2">
                      <SpringIcon width={18} height={18} />
                      <span className="text-white ms-2 small">Spring Boot</span>
                    </div>
                    <div className="d-flex align-items-center bg-secondary rounded-pill px-3 py-2">
                      <PostgresIcon width={18} height={18} />
                      <span className="text-white ms-2 small">PostgreSQL</span>
                    </div>
                    <div className="d-flex align-items-center bg-secondary rounded-pill px-3 py-2">
                      <PythonIcon width={18} height={18} />
                      <span className="text-white ms-2 small">Python</span>
                    </div>
                    <div className="d-flex align-items-center bg-secondary rounded-pill px-3 py-2">
                      <FastAPIIcon width={18} height={18} />
                      <span className="text-white ms-2 small">FastAPI</span>
                    </div>
                    <div className="d-flex align-items-center bg-secondary rounded-pill px-3 py-2">
                      <CSharpIcon width={18} height={18} />
                      <span className="text-white ms-2 small">C#</span>
                    </div>
                    <div className="d-flex align-items-center bg-secondary rounded-pill px-3 py-2">
                      <DotNetIcon width={18} height={18} />
                      <span className="text-white ms-2 small">.NET</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card bg-dark border-white h-100 hover-card">
                <div className="card-body p-4">
                  <div className="mb-3">
                    <span className="fs-1">💻</span>
                  </div>
                  <h5 className="card-title fw-bold mb-3 text-white">
                    Frontend Development
                  </h5>
                  <p className="card-text text-white mb-3">
                    Modern web interfaces, responsive design, and interactive
                    user experiences with cutting-edge frameworks.
                  </p>

                  {/* Frontend Technology Pills */}
                  <div className="d-flex flex-wrap gap-2">
                    <div className="d-flex align-items-center bg-secondary rounded-pill px-3 py-2">
                      <ReactIcon width={18} height={18} />
                      <span className="text-white ms-2 small">React</span>
                    </div>
                    <div className="d-flex align-items-center bg-secondary rounded-pill px-3 py-2">
                      <TypeScriptIcon width={18} height={18} />
                      <span className="text-white ms-2 small">TypeScript</span>
                    </div>
                    <div className="d-flex align-items-center bg-secondary rounded-pill px-3 py-2">
                      <JavaScriptIcon width={18} height={18} />
                      <span className="text-white ms-2 small">JavaScript</span>
                    </div>
                    <div className="d-flex align-items-center bg-secondary rounded-pill px-3 py-2">
                      <HtmlIcon width={18} height={18} />
                      <span className="text-white ms-2 small">HTML5</span>
                    </div>
                    <div className="d-flex align-items-center bg-secondary rounded-pill px-3 py-2">
                      <CssIcon width={18} height={18} />
                      <span className="text-white ms-2 small">CSS3</span>
                    </div>
                  </div>
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
                  <p className="card-text text-white mb-3">
                    Essential development tools, cloud platforms, and IDEs for
                    efficient workflow and deployment.
                  </p>

                  {/* Development Tools Pills */}
                  <div className="d-flex flex-wrap gap-2">
                    <div className="d-flex align-items-center bg-secondary rounded-pill px-3 py-2">
                      <GitIcon width={18} height={18} />
                      <span className="text-white ms-2 small">Git</span>
                    </div>
                    <div className="d-flex align-items-center bg-secondary rounded-pill px-3 py-2">
                      <DockerIcon width={18} height={18} />
                      <span className="text-white ms-2 small">Docker</span>
                    </div>
                    <div className="d-flex align-items-center bg-secondary rounded-pill px-3 py-2">
                      <AwsIcon width={18} height={18} />
                      <span className="text-white ms-2 small">AWS</span>
                    </div>
                    <div className="d-flex align-items-center bg-secondary rounded-pill px-3 py-2">
                      <PostmanIcon width={18} height={18} />
                      <span className="text-white ms-2 small">Postman</span>
                    </div>
                    <div className="d-flex align-items-center bg-secondary rounded-pill px-3 py-2">
                      <VsCodeIcon width={18} height={18} />
                      <span className="text-white ms-2 small">VS Code</span>
                    </div>
                    <div className="d-flex align-items-center bg-secondary rounded-pill px-3 py-2">
                      <IntellijIcon width={18} height={18} />
                      <span className="text-white ms-2 small">IntelliJ</span>
                    </div>
                  </div>
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
                        application to a cloud environment using AWS and Docker.
                        My work helped ensure the platform's core functionality
                        was stable, efficient, and production ready.
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
                        management/feedback, application status tracking and
                        sorting, and intuitive dashboard views. Built with Java,
                        Spring Boot, React, and TypeScript.
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
                      <br />
                      <a
                        href="https://github.com/raghavSharma8269/JobVault"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn fw-semibold px-4 py-2 mt-4"
                        style={{
                          backgroundColor: "transparent",
                          color: "#14E0A1",
                          border: "1px solid #14E0A1",
                        }}
                      >
                        View GitHub →
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
          <div>
            {/* Social Icons */}
            <a
              href="https://github.com/raghavSharma8269"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link text-white d-inline-flex align-items-center"
              style={{ padding: "8px 12px" }}
            >
              <i className="bi bi-github fs-5"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/raghav-sharma-884750307/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link text-white d-inline-flex align-items-center"
              style={{ padding: "8px 12px" }}
            >
              <i className="bi bi-linkedin fs-5"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SinglePagePortfolio;
