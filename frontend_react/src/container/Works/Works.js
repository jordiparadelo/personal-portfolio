import React, { useState, useEffect } from "react";
// Assets
import { AiFillEye, AiFillGithub } from "react-icons/ai";
// Data
import { urlFor, client } from "../../clients";
// Styles
import "./Works.scss";

const Works = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filterWork, setFilterWork] = useState([]);
  const [works, setWorks] = useState([]);

  // Methods
  function handleWorkFilter(filter) {
    setActiveFilter(filter);
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
        <div className="works__content">
          <header className="works__header">
            <div className="app__section-label">Portfolio</div>
            <h2>All creative Works and Selected projects</h2>
            <p>Selection of works I've been doing during this time</p>
          </header>

          <div className="works__filter">
            {["UI/UX", "Web App", "React Js", "All"].map((filter, index) => (
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

        <div className="works__portfolio">
          {filterWork.map((work, index) => (
            <figure className="works__portofilio-item" key={index}>
              <figcaption className="works__portfolio-description">
                <div className="works__description-title-container">
                  <h3>{work.title}</h3>
                  <p>{work.description}</p>
                  <a href={work.projectLink} target="_blank" rel="noreferrer">
                    Live project
                  </a>
                </div>
                <div className="works__tags-container">
                  {work.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </figcaption>
              <picture className="works__portofilio-image">
                <img src={urlFor(work.imgUrl)} alt={work.name} />
              </picture>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
