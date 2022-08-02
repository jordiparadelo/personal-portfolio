// Styles
import "./Skills.scss";
// Data
import { urlFor } from "../../clients";
// Hooks
import { useClientData } from "../../hooks/useClientData";
import { SkillsList } from "../../components";

const Skills = () => {
  const query = [
    '*[_type =="experiences"]',
    '*[_type =="workExperience"]',
    '*[_type =="skills"]',
  ];
  const { data, isFetching } = useClientData(query);
  const [experiences, workExperiences, skills] = data;

  const expiriencesByDescYear = experiences?.sort(
    (prevExperience, nextExperience) =>
      nextExperience.year - prevExperience.year
  );
  const yearsOfExperience =
    expiriencesByDescYear &&
    expiriencesByDescYear[0]?.year -
      expiriencesByDescYear[expiriencesByDescYear?.length - 1]?.year;

  return (
    !isFetching && (
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
              {skills?.map((skill, index) => (
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
          <SkillsList skills={expiriencesByDescYear} experiences={workExperiences}/>
        </div>
      </section>
    )
  );
};

export default Skills;
