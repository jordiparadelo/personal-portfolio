import React, { useState } from "react";
// Assets
import { AiOutlineCode } from "react-icons/ai";
import { MdOutlineAnalytics, MdOutlineDesignServices } from "react-icons/md";
// Lib
import { motion } from "framer-motion";
// Animations
import { transition } from "./animations";

const ICONS = {
  MdOutlineAnalytics: <MdOutlineAnalytics />,
  AiOutlineCode: <AiOutlineCode />,
  MdOutlineDesignServices: <MdOutlineDesignServices />,
};

const ServicesCards = ({ services }) => {
  const [activeServices, setActiveServices] = useState();

  // Methods
  function handleClick(event) {
    const { currentTarget } = event;
    const index = currentTarget.dataset["index"];
    currentTarget.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
    setActiveServices(services[index]);
  }

  return (
      <div className="about__services">
        {services.map((service, index) => (
          <motion.figure
            className={`about__service-card`}
            aria-selected={service == activeServices}
            data-index={index}
            key={`technology-${index}`}
            initial={{
              x: 50,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                ...transition,
                delay: index * 0.2,
              },
            }}
            onClick={handleClick}
          >
            <picture className="about__card-icon">
              {ICONS[service.icon]}
            </picture>
            <figcaption className="about__card-description">
              <h3>{service.title}</h3>
              <hr />
              <p aria-hidden={service !== activeServices}>
                {service.description}
              </p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
  );
};

export default ServicesCards;
