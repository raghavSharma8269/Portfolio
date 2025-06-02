export default function LandingPage() {
  return (
    <div className="container-fluid text-white blended-background min-vh-100 px-5 py-5">
      {/* Navbar */}
      <nav className="d-flex justify-content-between align-items-center mb-5">
        <div className="fs-3 fw-bold">
          Software <span style={{ color: "#14E0A1" }}>Solutions</span>
        </div>
        <div className="d-none d-md-flex gap-4">
          <a href="#" className="text-white text-decoration-none">
            Hire Remote Team
          </a>
          <a href="#" className="text-white text-decoration-none">
            Hire Teams
          </a>
          <a href="#" className="text-white text-decoration-none">
            Services
          </a>
          <a href="#" className="text-white text-decoration-none">
            Success Stories
          </a>
        </div>
        <button
          className="btn btn-success text-black fw-semibold px-4 py-2"
          style={{ backgroundColor: "#14E0A1" }}
        >
          Contact Us
        </button>
      </nav>

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
            className="btn btn-success mt-4 text-black fw-semibold px-4 py-2"
            style={{ backgroundColor: "#14E0A1" }}
          >
            Contact Us
          </button>
        </div>

        <div className="col-md-6 position-relative" style={{ height: "500px" }}>
          <img
            src="nfn"
            alt="World Map"
            className="position-absolute top-0 start-0 w-100 h-100 object-fit-contain"
          />
        </div>
      </div>
    </div>
  );
}
