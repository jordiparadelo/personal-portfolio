import { useState, useRef, useEffect } from "react";
// Styles
import "./Works.scss";
// Components
import { ProjectsShowCase, WorksFilters } from "components";
// Hooks
import { useClientContext } from "context/ClientContext";
// Animations
import { initAnimation } from "./animations.js";

import { ShowcaseProvider } from "context/ShowcaseContext";

const Works = () => {
  const { works, isFetching } = useClientContext();
  const [filterWork, setFilterWork] = useState(works);

  const filtersCollection = ["New", "UI/UX", "Web App", "React Js"];

  const sectionRef = useRef(null);

  useEffect(() => {
    setFilterWork(works);
    sectionRef.current && !isFetching && initAnimation(sectionRef.current);
  }, [isFetching]);

  return (
    <section id="Works" className="works" ref={sectionRef}>
      <div className="app__wrapper">
        <div className="works__content">
          <WorksFilters
            filters={filtersCollection}
            works={works}
            setFilterWork={setFilterWork}
          />
          <hr />
        </div>
        <ShowcaseProvider>
          <ProjectsShowCase projects={filterWork} />
        </ShowcaseProvider>
      </div>
    </section>
  );
};

export default Works;
