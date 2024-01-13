import './Portfolio.css';

//Components Import
import Card from '../../UI/Card';
import HeadingText from '../../components/HeadingText/HeadingText';
// import Testtimonials from '../../components/Testimonials/Testtimonials'; update continues...

//Data Import
import { portfolio } from '../../data/Data';

export default function Portfolio() {
  return (
    <>
      <section className="portfolio">
        <HeadingText title={"Resent"} titlePrimary={"Work"} />
        <div className="container portfolio-container">
          {portfolio.map(({ id, img, name, des, github }) => {
            return (
              <Card classname={"project"} key={id}>
                <img src={img} alt="" />
                <h3>{name}</h3>
                <p>{des}</p>
                <a href={github}>Github</a>
              </Card>
            );
          })}
        </div>
      </section>
      {/* <Testtimonials /> */}
    </>
  );
}
