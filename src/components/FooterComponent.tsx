import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import linkedin from "../assets/linkedin.svg";
import youtube from "../assets/youtube.svg";

const FooterComponent = () => {
  return (
    <footer className="text-white text-center" style={{ marginTop: "100px" }}>
      <div className="container">
        <p>
          <img
            src={instagram}
            alt="instagram"
            className="ms-2 btn-hover mb-2"
            style={{ height: "20px", cursor: "pointer" }}
            onClick={() => window.open("https://www.instagram.com", "_blank")}
          />
          <img
            src={facebook}
            alt="facebook"
            className="ms-2 btn-hover mb-2"
            style={{ height: "20px", cursor: "pointer" }}
            onClick={() => window.open("https://www.facebook.com", "_blank")}
          />
          <img
            src={linkedin}
            alt="linkedin"
            className="ms-2 btn-hover mb-2"
            style={{ height: "20px", cursor: "pointer" }}
            onClick={() => window.open("https://www.linkedin.com", "_blank")}
          />
          <img
            src={youtube}
            alt="youtube"
            className="ms-2 btn-hover mb-2"
            style={{ height: "20px", cursor: "pointer" }}
            onClick={() => window.open("https://www.youtube.com", "_blank")}
          />
          <br />
          &copy; {new Date().getFullYear()}{" "}
          <span style={{ color: "#14E0A1" }}>Software Solutions.</span> All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterComponent;
