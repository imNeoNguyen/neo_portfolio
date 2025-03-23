import "./Tools.css";
import HeadingText from "../HeadingText/HeadingText";
import { tools_programming, tools_other, tools_design } from "../../data/Data";

export default function Tools() {
  return (
    <section className="tools">
      <HeadingText title={"Work"} titlePrimary={"Tools"} />

      <div className="container tools-container">
        {/* Development Tools */}
        <h3 className="tools-category">Development Tools</h3>
        <div className="tools-list">
          {tools_programming.map(({ id, img }) => (
            <div className="tool-card" key={id}>
              <img src={img} alt={`Tool ${id}`} />
            </div>
          ))}
        </div>

        {/* Other Tools */}
        <h3 className="tools-category">Other Tools</h3>
        <div className="tools-list">
          {tools_other.map(({ id, img }) => (
            <div className="tool-card" key={id}>
              <img src={img} alt={`Tool ${id}`} />
            </div>
          ))}
        </div>

        {/* Design Tools */}
        <h3 className="tools-category">Design Tools</h3>
        <div className="tools-list">
          {tools_design.map(({ id, img }) => (
            <div className="tool-card" key={id}>
              <img src={img} alt={`Tool ${id}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
