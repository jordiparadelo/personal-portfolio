// Assets
import { useEffect, useRef } from "react";
import { FiLink } from "react-icons/fi";
// Lib
import { useAnimation, useInView } from "framer-motion";

const SkillsList = ({ skills, experiences }) => {
  const container = useRef(null)
  const isInView = useInView({container})
  // const animation = useAnimation()

  useEffect(() => {
    // isInView && animation.start()
  }, [isInView])

  return (
  <div className="skills__list-container" role="list" ref={container}>
    {skills.map((experience, index) => {
      return (
        <div
          className="skills__list-item"
          role="listitem"
          key={`skill-${index}`}
        >
          <div className="skills__item-year">
            <p className="year">{experience.year}</p>
            <div className="skills__year-path-container">
              <div className="skills__year-path"></div>
            </div>
          </div>

          <div className="skills__description-container">
            {experience.works.map((work) => {
              const selectedWork = experiences.find(({ _id: id }) =>
                id.includes(work._ref)
              );
              return (
                <div className="skills__item-description" key={work._ref}>
                  {selectedWork?.actualWork && (
                    <p className="year">Until now</p>
                  )}
                  <h3 className="title">{selectedWork?.name}</h3>
                  <p className="company">
                    {selectedWork?.company}{" "}
                    <a
                      href={selectedWork?.companyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="link"
                    >
                      <FiLink />
                    </a>
                  </p>
                  <hr className="divider" />
                </div>
              );
            })}
          </div>
        </div>
      );
    })}
  </div>
)};

export default SkillsList;
