import React, { useEffect,useLayoutEffect, useRef, useState } from "react";
// Styles
import "./Portfolio.scss";
// Hooks
import { useClientData } from "hooks/useClientData";
// Components
import { ProtfolioCard } from "components";
// Animations
import { scrollAnimation, restartScroolAnimation } from "./animations.js";

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState(null);
  const [animationEnd, setAnimationEnd] = useState(false);

  const query = '*[_type == "works"]';
  const { data: works, isFetching } = useClientData(query);

  let sectionRef = useRef(null);
  let slideshowRef = useRef(null);

  useLayoutEffect(() => {
    setPortfolio(works);
    // isFetching && animationEnd && scrollAnimation(slideshowRef);
    // return () => !isFetching && restartScroolAnimation()
  }, [isFetching]);

  useLayoutEffect(() => {
    animationEnd && scrollAnimation(slideshowRef);
    return () => !isFetching && restartScroolAnimation()
  },[animationEnd])


  return (
    <main id="Portfolio" ref={(current) => (sectionRef = current)}>
      <div className="Porfolio__slideshow">
        <div
          className="slideshow-wrapper"
          ref={(current) => (slideshowRef = current)}
        >
          {portfolio?.map((project, index) => (
            <ProtfolioCard
              data={project}
              key={project.title + index}
              index={index}
              setAnimationEnd={setAnimationEnd}
            />
          ))}
          {portfolio?.map((project, index) => (
            <ProtfolioCard
              data={project}
              key={project.title + index}
              index={index}
              setAnimationEnd={setAnimationEnd}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
