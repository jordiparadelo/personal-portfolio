import { useLayoutEffect, useRef } from "react";
// Styles
import "./Experience.scss";
// Components
import { ExperienceList } from "components";
// Context
import { useClientContext } from "../../context/ClientContext";
// Animations
import {initAnimation} from "./animations.js"

const Experience = () => {
  const {experiences, workExperiences, isFetching} = useClientContext()
  const sectionRef = useRef(null);

  const worksByDescYear = workExperiences?.sort(
    (prevExperience, nextExperience) =>
      nextExperience.year - prevExperience.year
  );

  useLayoutEffect(() => {
    (experiences && sectionRef.current) && initAnimation(sectionRef.current)

  },[experiences, sectionRef])

  return (
    !isFetching && (
      <section id="Experience" className="Experience" ref={sectionRef}>
        <div className="app__wrapper">
          <header className="app__header">
            <h2 className="app__header-title">Experience</h2>
          </header>
          <ExperienceList experiences={worksByDescYear}/>
        </div>
      </section>
    )
  );
};

export default Experience;
