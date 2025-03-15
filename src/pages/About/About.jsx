/* eslint-disable react/no-unescaped-entities */
import "./About.css";
import CV from "../../assets/CV-NguyenThiKimNgan-InternDeveloper.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faBriefcase, faProjectDiagram, faUsers } from "@fortawesome/free-solid-svg-icons";
import HeadingText from "../../components/HeadingText/HeadingText";
import Tools from "../../components/Tools/Tools";
import Service from "../../components/Services/Services";
import { experience } from "../../data/Data";

export default function About() {
  return (
    <section className="About">
      <HeadingText title={"About"} titlePrimary={"Me"} />

      <div className="container about-container">
        {/* Left Section */}
        <div className="about-content">
          <h2>I'm Neo Nguyen</h2>
          <p>
            Passionate developer and designer, continuously challenging myself with creativity. I specialize in building modern, user-friendly applications.
          </p>
          <p>
            Technology is my tool to create positive impacts, and I strive to bring innovation to every project I work on.
          </p>
          <p>
            When I'm not coding, you’ll find me painting, exploring nature, or gaming with friends. Welcome to my world!
          </p>
          <a href={CV} download className="btn">
            <FontAwesomeIcon icon={faDownload} />
            Download CV
          </a>
        </div>

        {/* Right Section - Experience */}
        <div className="experience-container">
          {experience.map(({ id, no, title }) => (
            <div key={id} className="experience-card">
              <FontAwesomeIcon icon={id === 1 ? faBriefcase : id === 2 ? faProjectDiagram : faUsers} className="experience-icon" />
              <h3>{no}</h3>
              <p>{title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Sections */}
      <Tools />
      <Service />
    </section>
  );
}

