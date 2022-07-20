import React, { useEffect, useState } from "react";
// Styles
import "./Skills.scss";
// Assets
import { FiLink } from "react-icons/fi";
// Data
import { client } from "../../clients";

const Skills = () => {
  const [experiences, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type =="workExperience"]';
    client.fetch(query).then((data) => setSkills(data));
  }, []);

  return (
    <section id="Skills" className="skills">
      <div className="app__wrapper">
        <header className="app__header">
          <div class="app__section-label">Experience</div>
          <h2>Skills & Experiences</h2>
          <div className="skills__experience-container">
            <div className="skills__experience-count">
              <div className="year">5</div>
              <div className="label">
                Year of <br /> Experience.
              </div>
            </div>
            <div className="skills__experience-count">
              <div className="year">10</div>
              <div className="label">
                Satisfied <br /> Companies.
              </div>
            </div>
          </div>
        </header>

        <div className="skills__list-container" role="list">
          {experiences.map((experience, index) => {
            return (
              <div
                className="skills__list-item"
                role="listitem"
                key={`skill-${index}`}
              >
                <div className="skills__item-year">
                  <p className="year">{experience.year}</p>
                </div>

                <div className="skills__item-description">
                  {experience.actualWork && <p className="year">Until now</p>}
                  <h3 className="title">{experience.name}</h3>
                  <p className="company">
                    {experience.company}{" "}
                    <a
                      href={experience.companyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="link"
                    >
                      <FiLink />
                    </a>
                  </p>
                  <hr className="divider"/>
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
