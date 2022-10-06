import { useEffect, useRef } from "react";
// Styles
import "./Header.scss";
// Components
import { ScrollButton } from "../../components";
// Animations
import { initAnimation } from "./animations.js";

const Header = () => {
  let sectionRef = useRef(null);

  useEffect(() => {
    sectionRef && initAnimation(sectionRef);
  }, [sectionRef]);

  return (
    <section
      id="Header"
      className="header"
      ref={(ref) => (sectionRef = ref)}
    >
      <div className="app__wrapper">
        <h1 className="Header__title">
          <span className="title-line">
            <span className="line-text">I’m Jordi</span>
          </span>
          <span className="title-line">
            <span className="line-text">
              a <span className="highlight">digital</span> designer
            </span>
          </span>
          <span className="title-line">
            <span className="line-text">and developer</span>
          </span>
        </h1>
        <p className="Header__description">
          I'm a based designer who develop webs and app, from the
          concept design to the execution.
        </p>
        <ScrollButton />
      </div>
      <hr />
    </section>
  );
};

export default Header;
