import React, { useEffect, useState } from "react";
// Styles
import "./Project.scss";
// Components
import { About, Header, Skills, Testimonials } from "../../container";
// Lib
import { useParams } from "react-router-dom";
import { client, urlFor } from "../../clients";
import Masonry from "react-masonry-css";

const Project = () => {
  let { projectId } = useParams();
  const [project, setProject] = useState();
  const breakpointColumnsObj = {
    default: 2,
    500: 1
  };

  useEffect(() => {
    const query = `*[_type == 'works' && slug.current == "${projectId}"]`;
    client.fetch(query).then((data) => setProject(...data));
  }, []);

  return project && (
    <main id="Project">
      <header className="Project__header App__section">
        <div className="app__wrapper">
          <p className="Project_client">{project?.details.client}</p>
          <h1 className="Project_title">{project?.title}</h1>
        </div>
      </header>
      <section className="Project__cover">
        <img src={urlFor(project?.imgUrl)} alt={`${project?.title} cover image`} width="400" height="400"/>
      </section>
      <section className="Project__description" id="About">
        <div className="app__wrapper">
          <div className="Project__detail">
            <h2>Project Details</h2>
            <p>{project?.details.description}</p>
          </div>
          <div className="Project__detail-card">
            <div className="detail-card-module">
              <h4>Services</h4>
              {project?.details.services.map((service, index) => (
                <p key={`service-${index}`}>{service}</p>
              ))}
            </div>
            <hr />
            <div className="detail-card-module">
              <h4>Technology</h4>
              {project?.details.technologies.map((technology, index) => (
                <p key={`technology-${index}`}>{technology}</p>
              ))}
            </div>
            <hr />
            <div className="detail-card-module">
              <h4>Date</h4>
              <p>{project?.details.date}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="Project__gallery" id="Work">
        <div className="app__wrapper">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="masonry__container-grid"
            columnClassName="masonry__container-column"
          >
            {project?.details.gallery.map(({details, imgUrl}, index) => (
              <figure className="Project__portofilio-item" key={index}>
                <picture className="Project__portofilio-image">
                  <img src={urlFor(imgUrl)} alt={project.name} />
                </picture>
                {details && (<figcaption className="Project__portfolio-description">
                  <div className="Project__description-title-container">
                    <p>{details}</p>
                  </div>
                </figcaption>)}
              </figure>
            ))}
          </Masonry>
        </div>
      </section>
      <section className="Project__further-projects">
        <div className="app__wrapper"></div>
      </section>
    </main>
  );
};

export default Project;
