import type { FC } from "react";

interface PortfolioComponentProps {
  projectName: string;
  projectDescription: string;
  projectLink: string;
  projectImage: string;
}

const PortfolioComponent: FC<PortfolioComponentProps> = ({
  projectName,
  projectDescription,
  projectLink,
  projectImage,
}) => {
  return (
    <div
      className="container text-light blended-background-reverse rounded"
      style={{ marginTop: "70px" }}
    >
      <div className="row align-items-center p-4 rounded">
        {/* Text Column (Left) */}
        <div className="col-md-6">
          <h3
            className="project-link"
            onClick={() => window.open(projectLink, "_blank")}
          >
            {projectName}
          </h3>
          <p>{projectDescription}</p>
        </div>

        {/* Image Column (Right) */}
        <div className="col-md-6 text-center">
          <img
            src={projectImage}
            alt="projectImg"
            style={{
              width: "100%",
              maxWidth: "600px",
              height: "auto",
              borderRadius: "10px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioComponent;
