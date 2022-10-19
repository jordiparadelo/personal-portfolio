import React, { useEffect, useRef, useState } from "react";
import { urlFor } from "clients";
// Syles
import "./Slider.scss";
// Animations
import { initAnimation, transitionIn, transitionOut } from "./animations.js";
import { useShowcaseContext } from "context/ShowcaseContext";
// Lib
import { Transition } from "react-transition-group";
import { Link } from "react-router-dom";

const Slider = ({ slides, initialSlide, className }) => {
  const { currentIndex } = useShowcaseContext();
  const [active, setActive] = useState(currentIndex);

  let sliderRef = useRef(null);

  useEffect(() => {
    setActive(initialSlide);
  }, [initialSlide]);

  useEffect(() => {
    initAnimation(sliderRef);
    const slideWidth = slides[0].clientWidths;
  }, [slides]);

  return (
    <div
      className={className ? `Slider ${className}` : "Slider"}
      ref={(current) => (sliderRef = current)}
    >
      {slides.map((project, index) => {
        const activeProject = active == index;
        return (
          <Transition
            in={activeProject}
            timeout={1000}
            // onEnter={transitionIn}
            // onExit={transitionOut}
            key={`${project.title}-${index}`}
          >
            <Link
              to={`/works/${project.slug.current}`}
              className={activeProject ? "Slider__card active" : "Slider__card"}
              hidden={!activeProject}
            >
              <figure>
                <img src={urlFor(project.imgUrl)} alt={project.title} />
                <figcaption></figcaption>
              </figure>
            </Link>
          </Transition>
        );
      })}
    </div>
  );
};

export default Slider;
