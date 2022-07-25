import React, { useState, useEffect } from "react";
// Assets
import { AiFillEye, AiFillGithub } from "react-icons/ai";
// Data
import { urlFor, client } from "../../clients";
// Styles
import "./Works.scss";
// Lib
import Masonry from "react-masonry-css";

const Works = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filterWork, setFilterWork] = useState([]);
  const [works, setWorks] = useState([]);
  const breakpointColumnsObj = {
    default: 2,
    500: 1
  };
  const filtersCollection = ["All", "UI/UX", "Web App", "React Js"]

  // Methods
  function handleWorkFilter(filter) {
    setActiveFilter(filter);

    if(filter === 'All') {
      setFilterWork(works)
    } else {
      setFilterWork(works.filter(work => work.tags.includes(filter)));
    }
  }

  useEffect(() => {
    const query = '*[_type == "works"]';
    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  return (
    <section id="Works" className="works">
      <div className="app__wrapper">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="works__container-grid"
          columnClassName="works__container-column"
        >
          <div className="works__content">
            <header className="app__header">
              <div className="app__section-label">Portfolio</div>
              <h2>All creative Works and Selected projects</h2>
              <p>Selection of works I've been doing during this time</p>
            </header>

            <div className="works__filter">
              {filtersCollection.map((filter, index) => (
                <button
                  className={`works__fiter-item ${
                    activeFilter == filter ? "active" : ""
                  }`}
                  key={index}
                  onClick={() => handleWorkFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {filterWork.map((work, index) => (
            <figure className="works__portofilio-item" key={index}>
              <figcaption className="works__portfolio-description">
                <div className="works__description-title-container">
                  <h3>{work.title}</h3>
                  <p>{work.description}</p>
                </div>
                <div className="works__tags-container">
                  {work.tags.filter(tag =>  !tag.includes('All')).map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </figcaption>
              <picture className="works__portofilio-image">
                <img src={urlFor(work.imgUrl)} alt={work.name} />
                <div className="works__portofilio-actions">
                  {work.projectLink && (<a
                    className="works__portofilio-link"
                    href={work.projectLink}
                    target="_blank"
                    rel="noreferrer"
                    alt="Live view"
                  >
                    <AiFillEye />
                  </a>)}
                  {work.codeLink && (<a
                    className="works__portofilio-link"
                    href={work.codeLink}
                    target="_blank"
                    rel="noreferrer"
                    alt="Code view"
                  >
                    <AiFillGithub />
                    {console.log(work.codeLink)}
                  </a>)}
                </div>
              </picture>
            </figure>
          ))}
        </Masonry>
      </div>
    </section>
  );
};

export default Works;
