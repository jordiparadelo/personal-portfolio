import React, { useEffect, useRef } from "react";
// Contenxt
import { useShowcaseContext } from "../../context/ShowcaseContext";
// Animations
import {
  initAnimation,
  restartAnimation,
  transitionIn,
  transitionOut,
} from "./animations.js";
// Styles
import "./ShowcaseTitle.scss";
// Lib
import { Transition } from "react-transition-group";

const ShowcaseTitle = ({ projects }) => {
  const { currentIndex } = useShowcaseContext();
  let showcaseTitle = useRef(null);

  useEffect(() => {
    initAnimation(showcaseTitle);
  }, [projects]);

  return (
    <div className="ShowcaseTitle" ref={(current) => (showcaseTitle = current)}>
      {projects?.map((project, index) => {
        const activeProject = currentIndex == index;
        return (
          <Transition
            in={activeProject}
            timeout={1000}
            onEnter={transitionIn}
            onExit={transitionOut}
            key={`${project.title}-${index}`}
          >
            <p
              className={activeProject ? "active" : null}
              // hidden={!activeProject}
            >
              {project.title}
            </p>
          </Transition>
        );
      })}
    </div>
  );
};

export default ShowcaseTitle;
