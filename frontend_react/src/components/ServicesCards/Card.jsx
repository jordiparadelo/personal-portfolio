import React, { useEffect, useLayoutEffect, useRef } from "react";
// Assets
import { AiOutlineCode } from "react-icons/ai";
import { MdOutlineAnalytics, MdOutlineDesignServices } from "react-icons/md";
// Animation
import { initAnimation, restartAnimation } from "./animations.js";

const ICONS = {
  MdOutlineAnalytics: <MdOutlineAnalytics />,
  AiOutlineCode: <AiOutlineCode />,
  MdOutlineDesignServices: <MdOutlineDesignServices />,
};

const Card = ({ service, index, activeService }) => {
  let cardRef = useRef(null);

  useLayoutEffect(() => {
    initAnimation(cardRef.current);
    return () => restartAnimation()
  }, [activeService]);

  return (
    <figure
      className={`ServicesCards__card`}
      aria-selected={index == activeService}
      data-index={index}
      ref={cardRef}
    >
      <picture className="card-icon">{ICONS[service.icon]}</picture>
      <figcaption className="card-description">
        <h3>{service.title}</h3>
        <hr />
        <p aria-hidden={index != activeService}>{service.description}</p>
      </figcaption>
    </figure>
  );
};

export default Card;
