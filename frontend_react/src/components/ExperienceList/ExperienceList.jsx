import { useEffect, useRef } from "react";
// Styles
import "./ExperienceList.scss";
// Assets
import { FiLink } from "react-icons/fi";
// Constants
import { listHeader } from "./constants";
// Animations
import {initAnimation} from "./animations.js"

const ExperienceList = ({ experiences }) => {
  const listRef = useRef(null)

  // useEffect(() => {
  //   listRef.current && initAnimation(listRef.current)
  // }, [listRef])
  

  return(
  <div className="ExperienceList" role="list" ref={listRef}>
    <header className="ExperienceList__header">
      {listHeader.map((item, index) => (
        <div className="ExperienceList__column-title" key={item + index}>
          {item}
        </div>
      ))}
    </header>
    {experiences.map((experience, index) => {
      return (
        <div
          className="ExperienceList__item"
          role="listitem"
          key={`skill-${index}`}
        >
          <div className="item-container">
            <p className="year">{experience.year}</p>
            <h3 className="title">{experience?.name}</h3>
            <p className="company">
              {experience?.company}{" "}
              <a
                href={experience?.companyUrl}
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                <FiLink />
              </a>
            </p>
          </div>
          <hr className="divider" />
        </div>
      );
    })}
  </div>
)};

export default ExperienceList;
