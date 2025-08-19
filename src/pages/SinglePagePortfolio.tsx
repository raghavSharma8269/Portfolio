import "./SinglePagePortfolio.css";

const SinglePagePortfolio = () => {
  const scrollToSection = (sectionId) => {
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
            DevTeam
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
                Hire a{" "}
                <span style={{ color: "#14E0A1" }}>
                  Passionate Software Team
                </span>{" "}
                for your Project
              </h1>
              <p className="fs-5 text-secondary mb-4">
                <strong className="text-white">
                  Say goodbye to the endless hiring search and soaring costs.
                </strong>{" "}
                Our team of skilled developers, designers, and marketing
                professionals delivers high quality results at a low cost.
                Saving you time, money, and stress.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3">
                <button
                  onClick={() => scrollToSection("portfolio")}
                  className="btn btn-lg fw-semibold px-4 py-3"
                  style={{ backgroundColor: "#14E0A1", color: "black" }}
                >
                  View Our Work
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="btn btn-outline-light btn-lg fw-semibold px-4 py-3"
                  style={{ borderColor: "#14E0A1" }}
                >
                  Contact Us
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
              About Us
            </h2>
            <p
              className="fs-5 text-secondary mx-auto"
              style={{ maxWidth: "800px" }}
            >
              We are a team of passionate individuals dedicated to delivering
              the best services to our clients. Our mission is to provide
              high-quality solutions that meet the unique needs of each client.
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
              <h5 className="fw-bold">Integrity</h5>
              <p className="text-secondary">
                We build trust through honest communication and reliable
                delivery.
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
              <p className="text-secondary">
                We embrace cutting-edge technologies and creative solutions.
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
              <h5 className="fw-bold">Customer Focus</h5>
              <p className="text-secondary">
                Your success is our priority, and we tailor solutions to your
                needs.
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
                <span className="fs-3 text-dark">👥</span>
              </div>
              <h5 className="fw-bold">Teamwork</h5>
              <p className="text-secondary">
                Collaboration drives our success and delivers exceptional
                results.
              </p>
            </div>
          </div>

          <div className="row justify-content-center mt-5">
            <div className="col-lg-8">
              <div className="card bg-dark border-secondary p-4">
                <div className="card-body text-center">
                  <h4 className="card-title fw-bold mb-3">Meet Our Team</h4>
                  <p className="card-text text-secondary">
                    Our team consists of experts in various fields, including
                    software development, design, and marketing. We work
                    collaboratively to ensure the success of every project,
                    bringing years of experience and a commitment to excellence
                    in everything we do.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold mb-4" style={{ color: "#14E0A1" }}>
              Our Services
            </h2>
            <p
              className="fs-5 text-secondary mx-auto"
              style={{ maxWidth: "600px" }}
            >
              We offer comprehensive software solutions tailored to your
              business needs
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="card bg-dark border-secondary h-100 hover-card">
                <div className="card-body p-4">
                  <div className="mb-3">
                    <span className="fs-1">💻</span>
                  </div>
                  <h5 className="card-title fw-bold mb-3">
                    Software Development
                  </h5>
                  <p className="card-text text-secondary">
                    Custom web and mobile applications built with modern
                    technologies like React, TypeScript, Java, and Spring Boot.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card bg-dark border-secondary h-100 hover-card">
                <div className="card-body p-4">
                  <div className="mb-3">
                    <span className="fs-1">🎨</span>
                  </div>
                  <h5 className="card-title fw-bold mb-3">UI/UX Design</h5>
                  <p className="card-text text-secondary">
                    Beautiful, intuitive designs that enhance user experience
                    and drive engagement across all platforms.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card bg-dark border-secondary h-100 hover-card">
                <div className="card-body p-4">
                  <div className="mb-3">
                    <span className="fs-1">📈</span>
                  </div>
                  <h5 className="card-title fw-bold mb-3">Digital Marketing</h5>
                  <p className="card-text text-secondary">
                    Strategic marketing solutions to help your business grow and
                    reach your target audience effectively.
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
              Our Portfolio
            </h2>
            <p
              className="fs-5 text-secondary mx-auto"
              style={{ maxWidth: "700px" }}
            >
              Explore our diverse range of projects that showcase our expertise
              and creativity
            </p>
          </div>

          <div className="text-center mb-4">
            <p className="text-secondary mx-auto" style={{ maxWidth: "800px" }}>
              We take pride in delivering high-quality solutions tailored to
              meet the unique needs of our clients. Our portfolio includes a
              variety of projects across different industries, demonstrating our
              commitment to excellence and innovation.
            </p>
          </div>

          <div className="text-center mb-5">
            <h3 className="fs-3 fw-bold">Featured Projects</h3>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card bg-dark border-secondary">
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
                      <p className="text-secondary mb-4">
                        JobVault is a web application designed to help users
                        track their job applications. It includes features for
                        uploading resumes and cover letters, and managing job
                        applications. Built with Java, Spring Boot, React,
                        TypeScript, HTML/CSS.
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
              Contact Us
            </h2>
            <p className="fs-5 text-secondary">
              If you have any questions or would like to discuss a project, feel
              free to reach out!
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card bg-dark border-secondary">
                <div className="card-body p-4">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      👤 Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control bg-secondary border-0 text-white"
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
                      className="form-control bg-secondary border-0 text-white"
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
                      className="form-control bg-secondary border-0 text-white"
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
          <p className="text-secondary mb-0">
            © 2025 DevTeam. All rights reserved. | Passionate Software Solutions
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SinglePagePortfolio;
