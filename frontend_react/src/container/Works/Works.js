import React, { useState, useEffect } from "react";
// Styles
import "./Works.scss";
// Components
import { PortfolioCard, WorksFilters } from "../../components";
// Lib
import Masonry from "react-masonry-css";
// Hooks
import { useClientData } from "../../hooks/useClientData";

const Works = () => {
  const query = '*[_type == "works"]';
  const { data: works, isFetching } = useClientData(query);
  const [filterWork, setFilterWork] = useState(works);
  const breakpointColumnsObj = {
    default: 2,
    500: 1,
  };
  const filtersCollection = ["All", "UI/UX", "Web App", "React Js"];

  useEffect(() => {
    setFilterWork(works);
  }, [isFetching]);

  return (
    <section id="Works" className="works">
      <div className="app__wrapper">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="masonry__container-grid"
            columnClassName="masonry__container-column"
          >
            <div className="works__content">
              <header className="app__header">
                <div className="app__section-label">Portfolio</div>
                <h2>All creative Works and Selected projects</h2>
                <p>Selection of works I've been doing during this time</p>
              </header>

              <WorksFilters
                filters={filtersCollection}
                works={works}
                setFilterWork={setFilterWork}
              />
            </div>
            {filterWork.map((work, index) => (
              <PortfolioCard portfolio={work} key={index} index={index} />
            ))}
          </Masonry>
      </div>
    </section>
  );
};

export default Works;
