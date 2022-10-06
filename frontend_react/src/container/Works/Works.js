import React, { useState, useEffect } from "react";
// Styles
import "./Works.scss";
// Lib
import Masonry from "react-masonry-css";
// Components
import { PortfolioCard, ProjectsSlider, WorksFilters } from "../../components";
// Hooks
import { useClientContext } from "../../context/ClientContext";

const Works = () => {
  const { works, isFetching } = useClientContext();
  const [filterWork, setFilterWork] = useState(works);

  const filtersCollection = ["New", "UI/UX", "Web App", "React Js"];

  useEffect(() => {
    setFilterWork(works);
  }, [isFetching]);

  return (
    <section id="Works" className="works">
      <div className="app__wrapper">
        <div className="works__content">
          <WorksFilters
            filters={filtersCollection}
            works={works}
            setFilterWork={setFilterWork}
          />
          <hr/>
        </div>
        <ProjectsSlider projects={filterWork}/>
      </div>
    </section>
  );
};

export default Works;
