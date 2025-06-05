import FooterComponent from "../components/FooterComponent";
import NavBarComponent from "../components/NavBarComponent";
import axios from "axios";
import { useState, type FormEvent } from "react";

const ContactPage = () => {
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertType, setAlertType] = useState<"success" | "danger" | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await axios.post(
        "https://formsubmit.co/r.sharmali2023@gmail.com",
        formData,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.status === 200) {
        setAlertType("success");
        setAlertMessage("✅ Message sent successfully!");
        form.reset();
      } else {
        setAlertType("danger");
        setAlertMessage("❌ Failed to send message.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setAlertType("danger");
      setAlertMessage("❌ Something went wrong.");
    }

    // removes the alert after 7 seconds
    setTimeout(() => {
      setAlertMessage(null);
      setAlertType(null);
    }, 7000);
  };

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

        {/* Bootstrap Alert */}
        {alertMessage && alertType && (
          <div
            className={`alert alert-${alertType} mt-4 w-75 mx-auto`}
            role="alert"
          >
            {alertMessage}
          </div>
        )}

        <div className="d-flex justify-content-center">
          <form onSubmit={handleSubmit} className="mt-4 w-50 w-md-50">
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
