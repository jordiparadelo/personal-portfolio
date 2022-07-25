import React, { useEffect, useState } from "react";
// Styles
import "./Skills.scss";
// Assets
import { FiLink } from "react-icons/fi";
// Data
import { client, urlFor } from "../../clients";

const Skills = () => {
  const [workExperiences, setWorkExperiences] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);
  const expiriencesByDescYear = experiences.sort(
    (prevExperience, nextExperience) =>
      nextExperience.year - prevExperience.year
  );
  const yearsOfExperience =
    expiriencesByDescYear[0]?.year -
    expiriencesByDescYear[expiriencesByDescYear?.length - 1]?.year;

  useEffect(() => {
    const query = '*[_type =="experiences"]';
    client.fetch(query).then((data) => setExperiences(data));
  }, []);

  useEffect(() => {
    const query = '*[_type =="workExperience"]';
    client.fetch(query).then((data) => setWorkExperiences(data));
  }, []);

  useEffect(() => {
    const query = '*[_type =="skills"]';
    client.fetch(query).then((data) => setSkills(data));
  }, []);

  return (
    <section id="Skills" className="skills">
      <div className="app__wrapper">
        <header className="app__header">
          <div className="app__section-label">Experience</div>
          <h2>Skills & Experiences</h2>
          <div className="skills__experience-container">
            <div className="skills__experience-count">
              <div className="year">{yearsOfExperience || "+5"}</div>
              <div className="label">
                Year of <br /> Experience.
              </div>
            </div>
            <div className="skills__experience-count">
              <div className="year">+5</div>
              <div className="label">
                Satisfied <br /> Companies.
              </div>
            </div>
          </div>

          <div className="skills__skills-grid">
            {skills.map((skill, index) => (
              <div className="skills_skill-disc" key={`skill-${index}`}>
                <img
                  src={urlFor(skill.icon)}
                  alt={skill.name}
                  width="40"
                  height="40"
                />
              </div>
            ))}
          </div>
        </header>

        <div className="skills__list-container" role="list">
          {expiriencesByDescYear.map((experience, index) => {
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
                    const selectedWork = workExperiences.find(({ _id: id }) =>
                      id.includes(work._ref)
                    );
                    return (
                      <div
                        className="skills__item-description"
                        key={work._ref}
                      >
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
      </div>
    </section>
  );
};

export default Skills;
