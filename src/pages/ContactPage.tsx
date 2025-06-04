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
          <form
            action="https://formsubmit.co/r.sharmali2023@gmail.com"
            method="POST"
            className="mt-4 w-50 w-md-50"
          >
            <input
              type="hidden"
              name="_subject"
              value="Software Solutions Contact Form Submission"
            />
            <input type="hidden" name="_captcha" value="false" />
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label mt-3">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
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
                name="message"
                rows={5}
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-success mt-4 text-black fw-semibold px-4 py-2"
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
