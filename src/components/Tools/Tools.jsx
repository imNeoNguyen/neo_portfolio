import "./Tools.css";
import HeadingText from "../HeadingText/HeadingText";
import { tools } from "../../data/Data";

export default function Tools() {
  return (
    <section className="tools">
      <HeadingText title={"Work"} titlePrimary={"Tools"} />

      <div className="container tools-container">
        {tools.map(({ id, img }) => (
          <div className="tool-card" key={id}>
            <img src={img} alt={`Tool ${id}`} />
          </div>
        ))}
      </div>
    </section>
  );
}
