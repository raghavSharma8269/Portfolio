import FooterComponent from "../components/FooterComponent";
import NavBarComponent from "../components/NavBarComponent";
import PortfolioComponent from "../components/PortfolioComponent";
import jobVaultImage from "../assets/projectImages/JobVault.png";

const PortfolioPage = () => {
  return (
    <>
      <NavBarComponent />
      <div className="container mt-4">
        <div className="text-center">
          <h1 style={{ color: "#14E0A1" }}>Our Portfolio</h1>
          <p className="mt-4">
            Explore our diverse range of projects that showcase our expertise
            and creativity.
          </p>
        </div>
        <div className="d-flex justify-content-center mt-4">
          <p className="w-75 w-md-50">
            We take pride in delivering high-quality solutions tailored to meet
            the unique needs of our clients. Our portfolio includes a variety of
            projects across different industries, demonstrating our commitment
            to excellence and innovation.
          </p>
        </div>
        <div className="text-center mt-4">
          <h2>Featured Projects</h2>
          <PortfolioComponent
            projectName="JobVault"
            projectDescription="JobVault is a web application designed to help users track their job applications. It includes features for uploading resumes and cover letters, and managing job applications. Built with Java, Spring Boot, React, TypeScript, HTML/CSS."
            projectImage={jobVaultImage}
            projectLink="https://job-vault-livid.vercel.app/welcome"
          />
        </div>
        <div className="text-center" style={{ marginTop: "70px" }}>
          <h2>Contact Us for More Information</h2>
          <p>
            If you would like to learn more about our work or discuss a
            potential project, please{" "}
            <a href="/contact" className="project-link">
              contact us
            </a>
            .
          </p>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default PortfolioPage;
