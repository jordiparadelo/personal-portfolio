import React, { useEffect, useRef } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { RiExternalLinkLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { urlFor } from "../../clients";
import { motion, useScroll, useTransform } from "framer-motion";
// Animations
import { portfolioCardAnimation } from "./animations";

const PortfolioCard = ({ portfolio, index }) => {
  const { title, blurb, name, tags, imgUrl, codeLink, slug, projectLink } =
    portfolio;

  const card = useRef(null);

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [-100, 300])

  return (
    <motion.figure
      className="works__portofilio-item"
      ref={card}
      initial="initial"
      animate="animate"
      variants={portfolioCardAnimation(index)}
    >
      <figcaption className="works__portfolio-description">
        <div className="works__description-title-container">
          <h3>{title}</h3>
          <p>{blurb}</p>
        </div>
        <div className="works__tags-container">
          {tags
            .filter((tag) => !tag.includes("All"))
            .map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
        </div>
      </figcaption>
      <picture className="works__portofilio-image">
        <motion.img
          src={urlFor(imgUrl)}
          alt={name}
          style={{ y, rotate: -15 }}
        />
        <div className="works__portofilio-actions">
          {projectLink && (
            <a
              className="works__portofilio-link"
              href={projectLink}
              target="_blank"
              rel="noreferrer"
              alt="Live view"
            >
              <RiExternalLinkLine />
            </a>
          )}
          {codeLink && (
            <a
              className="works__portofilio-link"
              href={codeLink}
              target="_blank"
              rel="noreferrer"
              alt="Code view"
            >
              <AiFillGithub />
            </a>
          )}
          <Link
            to={`/works/${slug?.current}`}
            className="works__portofilio-link"
          >
            <AiFillEye />
          </Link>
        </div>
      </picture>
    </motion.figure>
  );
};

export default PortfolioCard;
