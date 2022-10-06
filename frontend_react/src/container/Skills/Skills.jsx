// Styles
import "./Skills.scss";
// Data
import { urlFor } from "../../clients";
// Components
import { ExperienceList } from "../../components";
// Context
import { useClientContext } from "../../context/ClientContext";

const Skills = () => {
  const {experiences, workExperiences, skills, isFetching} = useClientContext()

  const worksByDescYear = workExperiences?.sort(
    (prevExperience, nextExperience) =>
      nextExperience.year - prevExperience.year
  );

  return (
    !isFetching && (
      <section id="Skills" className="skills">
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

export default Skills;
