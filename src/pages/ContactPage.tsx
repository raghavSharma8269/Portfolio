import FooterComponent from "../components/FooterComponent";
import NavBarComponent from "../components/NavBarComponent";

const ContactPage = () => {
  return (
    <>
      <NavBarComponent />
      <div className="container mt-4">
        <div className="text-center">
          <h1 style={{ color: "#14E0A0" }}>Contact Us</h1>
          <p className="mt-4">
            If you have any questions, feel free to reach out!
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <form className="mt-4 w-50 w-md-50">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input type="text" className="form-control" id="name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label mt-3">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label mt-3">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows={5}
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-success btn-hover mt-4 text-black fw-semibold px-4 py-2"
              style={{ backgroundColor: "#14E0A1" }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default ContactPage;
