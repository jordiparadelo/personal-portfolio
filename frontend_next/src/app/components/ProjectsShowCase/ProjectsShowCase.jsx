"use client"

import { useEffect, useRef } from "react";
// Styles
import "./ProjectsShowCase.scss";
// Import Swiper React components
import "swiper/css";
import "swiper/css/mousewheel";
// Animations
import { initAnimation, restartAnimation } from "./animations.js";
// Constants
import { Slider, ShowcaseTitle } from "components";
import { useSlider } from "hooks/useSlider";
// Context
import { useShowcaseContext } from "context/ShowcaseContext";

const Circle = () => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="32" cy="32" r="31.5" stroke="#FF932F" />
  </svg>
);

const ProjectsShowCase = ({ projects }) => {
  const { currentIndex, setCurrentIndex } = useShowcaseContext();
  const projectQty = projects?.length;

  const sectionRef = useRef(null);

  const newSliderRef = useRef(null);
  const sliderRef = useRef(null);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const [slideLenght] = useSlider(newSliderRef);

  useEffect(() => {
    setCurrentIndex(0);
    sectionRef.current && projects && initAnimation(sectionRef.current);
    return () => restartAnimation();
  }, [projects]);

  useEffect(() => {
    sectionRef.current && initAnimation(sectionRef.current);
    return () => restartAnimation();
  }, [currentIndex]);

  function handleNextSlide(nextState) {
    const STATE_REDUCER = {
      NEXT: () => setCurrentIndex((prevState) => (prevState + 1) % projectQty),
      PREV: () =>
        setCurrentIndex((prevState) =>
          prevState <= 0 ? projectQty - 1 : (prevState - 1) % projectQty
        ),
    };
    // console.log(STATE_REDUCER(nextState))
    STATE_REDUCER[nextState]();
  }

  return (
      projects && (
        <div className="ProjectsShowCase" ref={sectionRef}>
          <div className="ProjectsShowCase_project-details">
            <header className="project-header">
              <p>{`0${currentIndex + 1}`}</p>
              <span>/</span>
              <p>
                {projects.length < 10 && 0}
                {projects.length}
              </p>
            </header>
            <div className="project-content">
              <h2 className="project-title">
                {projects[currentIndex]?.details.client}
              </h2>
              <p>{projects[currentIndex]?.blurb}</p>
            </div>

            <nav
              className="ProjectsShowCase__navigation"
              disabled={projectQty <= 1}
            >
              <button
                ref={navigationPrevRef}
                onClick={() => handleNextSlide("PREV")}
              >
                <Circle />
                <span>👈</span>
              </button>
              <button
                ref={navigationNextRef}
                onClick={() => handleNextSlide("NEXT")}
              >
                <Circle />
                <span>👉</span>
              </button>
            </nav>
          </div>
          <ShowcaseTitle projects={projects} />
          <div className="ProjectsShowCase__slider" ref={sliderRef}>
            <Slider slides={projects} initialSlide={currentIndex} />
            <Slider
              slides={projects}
              initialSlide={(currentIndex + 1) % projectQty}
            />
          </div>
        </div>
      )
  );
};

export default ProjectsShowCase;
