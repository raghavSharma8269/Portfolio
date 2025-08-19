import "./SinglePagePortfolio.css";

const SinglePagePortfolio = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Navigation */}
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top border-bottom"
        style={{ backgroundColor: "#0B0F2F" }}
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
                  Services
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
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-vh-100 d-flex align-items-center"
        style={{ paddingTop: "80px" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
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
            <div className="col-lg-6 mt-5 mt-lg-0 text-center">
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
      <section id="about" className="py-5">
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

          <div className="row g-4 mt-5">
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
      <section id="services" className="py-5">
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

          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="card bg-dark border-white h-100 hover-card">
                <div className="card-body p-4">
                  <div className="mb-3">
                    <span className="fs-1">💻</span>
                  </div>
                  <h5 className="card-title fw-bold mb-3">
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
                  <h5 className="card-title fw-bold mb-3">
                    Backend Development
                  </h5>
                  <p className="card-text text-white">
                    Java, Spring Boot, REST APIs, database design, and
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
                  <h5 className="card-title fw-bold mb-3">Development Tools</h5>
                  <p className="card-text text-white">
                    Git, VS Code, IntelliJ IDEA, Docker, deployment platforms,
                    and modern development workflows for efficient project
                    delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-5">
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

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card bg-dark border-white">
                <div className="card-body p-4">
                  <div className="row align-items-center">
                    <div className="col-lg-6 text-center mb-4 mb-lg-0">
                      <div
                        className="rounded p-5"
                        style={{
                          background:
                            "linear-gradient(135deg, #007bff 0%, #6f42c1 100%)",
                        }}
                      >
                        <span className="fs-1 text-white">💼</span>
                        <h4 className="fw-bold text-white mt-3">JobVault</h4>
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
      <section id="contact" className="py-5">
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
            <div className="col-md-6">
              <div className="card bg-dark border-white">
                <div className="card-body p-4">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      👤 Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control bg-white border-0 text-white"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      📧 Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control bg-white border-0 text-white"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="form-label">
                      💬 Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="form-control bg-white border-0 text-white"
                      required
                    />
                  </div>

                  <button
                    className="btn w-100 fw-semibold py-3"
                    style={{ backgroundColor: "#14E0A1", color: "black" }}
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-4">
        <div className="container text-center">
          <div className="mb-3">
            <span className="fw-bold fs-4" style={{ color: "#14E0A1" }}>
              DevTeam
            </span>
          </div>
          <p className="text-white mb-0">
            © 2025 DevTeam. All rights reserved. | Passionate Software Solutions
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SinglePagePortfolio;
