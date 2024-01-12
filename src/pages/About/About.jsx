import './About.css'
import CV from '../../assets/CV.pdf'

//FontAwesome Import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

//Data Import
import {experience} from '../../data/Data'

//Components Import
import HeadingText from '../../components/HeadingText/HeadingText'
import Card from '../../UI/Card'
import Tools from '../../components/Tools/Tools'
import Service from '../../components/Services/Services'

export default function About() {
  return (
    <>
      <section className="About">
        <HeadingText title={"About"} titlePrimary={"Me"} />
        <div className="container about-container">
          <div className="about-left">
            <h3>Im Neo Nguyen</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit qui
              ab debitis nesciunt assumenda maxime eos quidem reprehenderit
              porro dolorum sint, exercitationem molestiae, fugit rerum
              suscipit, nobis aliquid sequi nihil.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
              laborum facere dicta debitis eius eligendi quas iusto autem.
              Accusantium ea natus harum accusamus rerum? Quae accusantium vero
              laborum esse minima!
            </p>
            <a href={CV} download className="btn">
              Download CV <span><FontAwesomeIcon icon={faDownload}/></span>
            </a>
          </div>

          <div className="about-right">
            {
              experience.map(({id, no, title})=>{
                return(
                  <Card key={id} classname={'experience-card'}>
                    <h1><span>{no}</span></h1>
                    <p>{title}</p>
                  </Card>
                )
              })
            }
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Tools />
      <Service />
    </>
  );
}
