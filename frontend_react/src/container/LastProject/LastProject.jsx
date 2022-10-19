import React, { useEffect, useRef } from "react";
// Styles
import "./LastProject.scss";
// Assets
import Cover from "assets/movistarDetailsCover.jpg";
// Animations
import { initAnimation } from "./animations.js";

const LastProject = () => {
  let sectionRef = useRef(null);

  useEffect(() => {
    sectionRef && initAnimation(sectionRef);
  }, [sectionRef]);

  return (
    <section id="LastProject" ref={(ref) => sectionRef = ref}>
      <div className="app__wrapper">
        <div className="LastProject__details">
          <time>2020</time>
          <span>Web App</span>
          <hr />
          <span>Project Name</span>
        </div>
        <header className="LastProject__header">
          <h2>Latest Project</h2>
          <figure className="LastProject__cover">
            <img src={Cover} alt="" />
          </figure>
        </header>
        <div className="LastProject__description">
          <p>
            Website integrates modern design with elegance experience of a
            selected wine cellar.
          </p>
          <p className="description-detail">
            Website integrates modern design with elegance experience of a
            selected wine cellar.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LastProject;
