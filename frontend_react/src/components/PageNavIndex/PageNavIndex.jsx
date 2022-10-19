import React, { useEffect, useRef, useState } from "react";
// Styles
import "./PageNavIndex.scss";
// Utils
import { scrollToTarget } from "utils";
// Animations
import { initAnimation, revertAnimation } from "./animations";

const PageNavIndex = ({ links }) => {
  const [activeLink, setActiveLink] = useState(null);
  let navMenuRef = useRef(null);
  let backgroundRef = useRef(null);

  // Methods
  function handleClick(event, target) {
    const { currentTarget } = event;
    const currentIndex = parseInt(currentTarget.dataset.menuIndex);

    handleBackground(currentTarget);
    setActiveLink(currentIndex);
    scrollToTarget(event, target);
  }
  function handleBackground(selectedTarget) {
    const paddingNav = parseInt(getComputedStyle(navMenuRef)["padding"]);
    const props = {
      width: `${selectedTarget.clientWidth}px`,
      height: `${selectedTarget.clientHeight}px`,
      transform: `translateX(${selectedTarget.offsetLeft - paddingNav}px)`,
    };

    Object.entries(props).map(([style, value]) => {
      return (backgroundRef.style[style] = value);
    });

    // console.log(props)
  }
  function handleHover(event) {
    const { type, currentTarget } = event;
    const lastLinkActive = navMenuRef.children[activeLink] || currentTarget;

    const EVENT_REDUCER = {
      mouseenter: () => handleBackground(currentTarget),
      mouseleave: () => handleBackground(lastLinkActive),
    };

    EVENT_REDUCER[type]();
  }

  // Component Init
  useEffect(() =>{
    links && initAnimation(navMenuRef)
    return revertAnimation()
    // console.log(links)
  },[links])

  return (
    links && (
      <menu className="PageNavIndex" ref={(current) => (navMenuRef = current)}>
        {links.map((link, index) => (
          <a
            key={index}
            className="PageNavIndex__link"
            onClick={(event) => handleClick(event, `#${link.url}`)}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            data-menu-index={index}
            aria-selected={index === activeLink}
          >
            {link.name}
          </a>
        ))}
        <div
          className="PageNavIndex__link-background"
          ref={(current) => (backgroundRef = current)}
          hidden={activeLink === null}
        ></div>
      </menu>
    )
  );
};

export default PageNavIndex;
