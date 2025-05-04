/* eslint-disable react/no-unescaped-entities */
import "./Home.css";
import HeaderImage from "../../assets/avts/avt_neo2.png";

// FontAwesome Import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// Router Dom Link
import { Link } from "react-router-dom";

// Import thư viện đánh máy
import { TypeAnimation } from "react-type-animation";

import { faLinkedin, faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faLinkedin, faGithub, faFacebook);

export default function Home() {
  return (
    <header>
      <div className="container header-container">
        <div className="header-left">
          <img src={HeaderImage} alt="Neo Nguyen" />
        </div>
        <div className="header-right">
          <h1>
            <span>Hi, I'm Neo Nguyen</span>
            <br />
            <TypeAnimation
              sequence={[
                "Mobile Developer",
                4000,
                "UX/UI Designer",
                4000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="type-animation"
            />
          </h1>
          <p>
            Welcome to my portfolio website. Have a great day!
            <br />
            You can contact me via email{" "}
            <strong>imneoneonguyen@gmail.com</strong>
          {/* <br />
          <span className="social-icons">
            <a
              href="https://www.linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </a>
            <a
              href="https://github.com/your-github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
            <a
              href="https://facebook.com/your-facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "facebook"]} />
            </a>
          </span> */}

          
          </p>
          <Link className="btn" to={"/about"}>
            About Me <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </div>
    </header>
  );
}
