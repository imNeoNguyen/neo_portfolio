import "./About.css";
import CV from "../../assets/CV-NguyenThiKimNgan-InternDeveloper.pdf";

//FontAwesome Import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

//Data Import
import { experience } from "../../data/Data";

//Components Import
import HeadingText from "../../components/HeadingText/HeadingText";
import Card from "../../UI/Card";
import Tools from "../../components/Tools/Tools";
import Service from "../../components/Services/Services";

export default function About() {
  return (
    <>
      <section className="About">
        <HeadingText title={"About"} titlePrimary={"Me"} />
        <div className="container about-container">
          <div className="about-left">
            <h3>Im Neo Nguyen</h3>
            <p>
              Welcome to my "About Me" page! I have a habit of continuously
              pursuing creativity and challenging myself. With a background
              in programming and design, I am not only passionate about my work
              but also always seeking opportunities to expand my knowledge and
              skills.
            </p>{" "}
            <br />
            <p>
              I believe that technology can bring about positive changes in the
              world, and that's my biggest motivation.
            </p>{" "}
            <br />
            <p>
              Outside of work, I have a passion for painting, long-distance
              travel, mountain climbing, and playing games with friends. I
              continuously strive to infuse creativity and passion into every
              aspect of life. I hope this portfolio website serves as a gateway
              for you to get to know me better. Thank you for stopping by!
            </p>
            <a href={CV} download className="btn">
              Download CV{" "}
              <span>
                <FontAwesomeIcon icon={faDownload} />
              </span>
            </a>
          </div>

          <div className="about-right">
            {experience.map(({ id, no, title }) => {
              return (
                <Card key={id} classname={"experience-card"}>
                  <h1>
                    <span>{no}</span>
                  </h1>
                  <p>{title}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <Tools />
      <Service />
    </>
  );
}
