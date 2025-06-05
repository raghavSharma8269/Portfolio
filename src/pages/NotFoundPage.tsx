import { useNavigate } from "react-router-dom";
import cryingFace from "../assets/crying-face-svgrepo-com.svg";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="container text-center my-5">
      <h1 className="display-4">404 - Page Not Found</h1>
      <p className="lead">
        Sorry, the page you are looking for does not exist.
        <br />
        <img
          src={cryingFace}
          alt="Not Found"
          className="img-fluid mt-4"
          style={{ maxWidth: "100px" }}
        />
        <img
          src={cryingFace}
          alt="Not Found"
          className="img-fluid mt-4"
          style={{ maxWidth: "100px" }}
        />
        <img
          src={cryingFace}
          alt="Not Found"
          className="img-fluid mt-4"
          style={{ maxWidth: "100px" }}
        />
      </p>

      <button
        className="btn btn-success btn-hover mt-4 text-black fw-semibold px-4 py-2"
        style={{ backgroundColor: "#14E0A1" }}
        onClick={() => navigate("/")}
      >
        Return Home
      </button>
    </div>
  );
};

export default NotFoundPage;
