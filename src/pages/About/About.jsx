/* eslint-disable react/no-unescaped-entities */
import "./About.css";
import CV from "../../assets/CV_NguyenThiKimNgan_MobileDev.pdf";
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
            I'm a Mobile Developer and UX/UI Designer with a passion for creativity and technology.
          </p>
          <p>
            In this fast-evolving digital era, AI has become a powerful tool that helps me learn and grow from anywhere. I love using it to expand my knowledge and refine my skills.
          </p>
          <p>
            Excited to be part of this journey!
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

