import NavBarComponent from "../components/NavBarComponent";

const AboutUsPage = () => {
  return (
    <>
      <NavBarComponent />
      <div className="container mt-4">
        <div className="text-center">
          <h1>About Us</h1>
          <p>
            We are a team of passionate individuals dedicated to delivering the
            best services to our clients.
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <p className="mt-4 w-75 w-md-50">
            Our mission is to provide high-quality solutions that meet the
            unique needs of each client. With years of experience in the
            industry, we pride ourselves on our commitment to excellence and
            customer satisfaction.
          </p>
        </div>
        <div className="text-center mt-4">
          <h2>Our Values</h2>
          <ul className="list-unstyled">
            <li>Integrity</li>
            <li>Innovation</li>
            <li>Customer Focus</li>
            <li>Teamwork</li>
          </ul>
        </div>
        <div className="text-center mt-4">
          <h2>Meet Our Team</h2>
          <p>
            Our team consists of experts in various fields, including software
            development, design, and marketing. We work collaboratively to
            ensure the success of every project.
          </p>
        </div>
        <div className="text-center mt-4">
          <h2>Contact Us</h2>
          <p>
            If you would like to learn more about our services or discuss a
            potential project, please{" "}
            <a href="/contact" className="text-decoration-none">
              contact us
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
