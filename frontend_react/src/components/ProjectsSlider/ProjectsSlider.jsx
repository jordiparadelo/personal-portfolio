import { useEffect, useReducer, useRef, useState } from "react";
// Assets
import { urlFor } from "../../clients";
// Styles
import "./ProjectsSlider.scss";

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

const ProjectsSlider = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);
  const projectQty = projects?.length;
  let sliderRef = useRef(null)

  useEffect(() => {
    setCurrentIndex(0);
  }, [projects]);

  // Methods
  function handleSliderChange(type) {
    switch (type) {
      case "prev":
        setCurrentIndex(
          (prev) => (prev === 0 ? projectQty - 1 : prev - 1) % projectQty
        );
        break;
      case "next":
        setCurrentIndex((prev) => (prev + 1) % projectQty);
        break;

      default:
        break;
    }
  }

  return (
    projects && (
      <div className="ProjectsSlider">
        <div className="ProjectsSlider_project-details">
          <header className="project-header">
            <p>{`0${currentIndex + 1}`}</p>
            <span>/</span>
            <p>{projects[currentIndex]?.details.client}</p>
          </header>
          <div className="project-content">
            <h2 className="project-title">{projects[currentIndex]?.title}</h2>
            <p>{projects[currentIndex]?.blurb}</p>
          </div>

          <nav className="ProjectsSlider__navigation" disabled={projectQty <= 1}>
            <button onClick={() => handleSliderChange("prev")}>
              <Circle />
              <span>👈</span>
            </button>
            <button onClick={() => handleSliderChange("next")}>
              <Circle />
              <span>👉</span>
            </button>
          </nav>
        </div>
        <div className="ProjectsSlider__slider">
          <div className="slider-wrapper" ref={(current)=> sliderRef = current }>
            {projects.map((project, index) => (
              <figure className="ProjectsSlider__slider-card" key={project.title + index}>
                <img src={urlFor(project.imgUrl)} alt={project.title} />
                <figcaption></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default ProjectsSlider;
