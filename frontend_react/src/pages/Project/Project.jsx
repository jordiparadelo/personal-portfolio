import React, { useEffect, useState } from "react";
// Styles
import "./Project.scss";
// Assets
import { RiExternalLinkLine } from "react-icons/ri";
// Lib
import { Link, useParams } from "react-router-dom";
import { urlFor } from "../../clients";
import Masonry from "react-masonry-css";
// Hooks
import { useClientData } from "../../hooks/useClientData";

const Project = () => {
  let { projectId } = useParams();
  const query = [
    `*[_type == 'works' && slug.current == "${projectId}"]`,
    `*[_type == "works" && slug.current != "${projectId}"][0]{
    title,
    slug,
    imgUrl
  }`,
  ];
  const { data, isFetching } = useClientData(query);
  const [project, nextProject] = data;

  const [showBackground, setShowBackground] = useState(false);
  const breakpointColumnsObj = {
    default: 2,
    500: 1,
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, [projectId]);

  if (isFetching) return <p>Loading</p>;

  return (
    <main id="Project">
      <header className="Project__header App__section">
        <div className="app__wrapper">
          <p className="Project_client">{project[0]?.details.client}</p>
          <h1 className="Project_title">{project[0]?.title}</h1>
        </div>
      </header>
      <section className="Project__cover">
        <img
          src={urlFor(project[0]?.details.imgUrl)}
          alt={`${project[0]?.title} cover image`}
          width="400"
          height="400"
        />
      </section>
      <section className="Project__description" id="About">
        <div className="app__wrapper">
          <div className="Project__detail">
            <h2>Project Details</h2>
            <p>{project[0]?.details.description}</p>
            {project.projectLink && (
              <a
                className="Project__live-link"
                href={project.projectLink}
                target="_blank"
                alt={`${project.title} live view`}
                rel="noreferrer"
              >
                View Live <RiExternalLinkLine />
              </a>
            )}
          </div>
          <div className="Project__detail-card">
            <div className="detail-card-module">
              <h4>Services</h4>
              {project[0]?.details.services.map((service, index) => (
                <p key={`service-${index}`}>{service}</p>
              ))}
            </div>
            <hr />
            <div className="detail-card-module">
              <h4>Technology</h4>
              {project[0]?.details.technologies.map((technology, index) => (
                <p key={`technology-${index}`}>{technology}</p>
              ))}
            </div>
            <hr />
            <div className="detail-card-module">
              <h4>Date</h4>
              <p>{project[0]?.details.date}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="Project__gallery" id="Works">
        <div className="app__wrapper">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="masonry__container-grid"
            columnClassName="masonry__container-column"
          >
            {project[0]?.details.gallery.map(({ details, imgUrl }, index) => (
              <figure className="Project__portofilio-item" key={index}>
                <picture className="Project__portofilio-image">
                  <img src={urlFor(imgUrl)} alt={project.name} />
                </picture>
                {details && (
                  <figcaption className="Project__portfolio-description">
                    <div className="Project__description-title-container">
                      <p>{details}</p>
                    </div>
                  </figcaption>
                )}
              </figure>
            ))}
          </Masonry>
        </div>
      </section>
      <section className="Project__further-projects">
        <div className="app__wrapper">
          <div
            className="Project__further-projects-cover"
            aria-hidden={showBackground}
          >
            <img
              src={urlFor(nextProject?.imgUrl)}
              alt={`Next project ${nextProject?.title}`}
            />
          </div>
          <h2>Next Project</h2>
          <Link
            to={`/works/${nextProject?.slug.current}`}
            onMouseEnter={() => setShowBackground(true)}
            onMouseLeave={() => setShowBackground(false)}
          >
            {nextProject?.title}
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Project;
