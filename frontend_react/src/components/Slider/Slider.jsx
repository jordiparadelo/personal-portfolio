import { useEffect, useRef, useState } from "react";
import { urlFor } from "clients";
// Syles
import "./Slider.scss";
// Animations
import { initAnimation } from "./animations.js";
import { useShowcaseContext } from "context/ShowcaseContext";
// Lib
import { Transition } from "react-transition-group";
import Link from 'next/link';

const Slider = ({ slides, initialSlide, className }) => {
  const { currentIndex } = useShowcaseContext();
  const [active, setActive] = useState(currentIndex);

  let sliderRef = useRef(null);

  useEffect(() => {
    setActive(initialSlide);
  }, [initialSlide]);

  useEffect(() => {
    initAnimation(sliderRef);
  }, [slides]);

  return (
    <div
      className={className ? `Slider ${className}` : "Slider"}
      ref={(current) => (sliderRef = current)}
    >
      {slides.map((project, index) => {
        const activeProject = active === index;
        return (
          <Transition
            in={activeProject}
            timeout={1000}
            // onEnter={transitionIn}
            // onExit={transitionOut}
            key={`${project.title}-${index}`}
          >
            <Link
              to={`/portfolio/${project.slug.current}`}
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
