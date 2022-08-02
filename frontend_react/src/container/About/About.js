import React, { useState } from "react";
// Styles
import "./About.scss";
// Assets
import { FaReact, FaFigma, FaSketch } from "react-icons/fa";
import { SiNextdotjs, SiWebflow } from "react-icons/si";
import { AiOutlineCode } from "react-icons/ai";
import { MdOutlineDesignServices, MdOutlineAnalytics } from "react-icons/md";
// Hooks
import {useClientData} from "../../hooks/useClientData"


const technologies = [
  {
    name: "react",
    url: "https://reactjs.org/",
    icon: <FaReact />,
  },
  {
    name: "next",
    url: "https://nextjs.org/",
    icon: <SiNextdotjs />,
  },
  {
    name: "webflow",
    url: "https://webflow.com/",
    icon: <SiWebflow />,
  },
  {
    name: "figma",
    url: "https://www.figma.com/",
    icon: <FaFigma />,
  },
  {
    name: "sketch",
    url: "https://www.sketch.com/",
    icon: <FaSketch />,
  },
];

const ICONS = {
  MdOutlineAnalytics : <MdOutlineAnalytics/>,
  AiOutlineCode: <AiOutlineCode/>,
  MdOutlineDesignServices : <MdOutlineDesignServices/>
}

const About = () => {
  const query = '*[_type == "abouts"] |  order(order asc)';
  const {data: services} = useClientData(query);
  const [activeServices, setActiveServices] = useState();

  return (
    <section id="About" className="about">
      <div className="app__wrapper">
        <div className="about__content">
          <div className="about__title-container">
            <div className="app__section-label">About</div>
            <h2 className="about__title">
              Providing <strong>quality</strong> on all services
            </h2>
            <div className="about__description">
              <p>
                Focus on industry leading technologies so each project build
                with the best practices of the moment
              </p>
            </div>
          </div>
          <div className="about__technologies">
            {technologies.map((technology, index) => (
              <a
                href={technology.url}
                className="about__technology-disc"
                aria-label={technology.name}
                key={`technology-${index}`}
              >
                {technology.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="about__services" >
          {services.map((service, index) => (
            <figure
            className={`about__service-card`}
            aria-selected={service == activeServices}
            key={`technology-${index}`}
            onClick={() => setActiveServices(services[index])}
            >
              <picture className="about__card-icon">{ICONS[service.icon]}</picture>
              <figcaption className="about__card-description">
                <h3>{service.title}</h3>
                <hr />
                <p aria-hidden={service !== activeServices}>{service.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
