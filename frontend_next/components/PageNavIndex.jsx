import { useEffect, useLayoutEffect, useRef, useState } from "react";
// Styles
import styles from "@/styles/PageNavIndex.module.scss";
// Utils
import { scrollToTarget } from "@/utils/index";
// Animations
import { initAnimation, revertAnimation } from "@/constants/animations";
import Link from "next/link";

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
  useLayoutEffect(() =>{
    // links && initAnimation(navMenuRef)
    return revertAnimation()

  },[links])

  return (
    links && (
      <menu className={styles["PageNavIndex"]} ref={(current) => (navMenuRef = current)}>
        {links.map((link, index) => (
          <Link
            key={index}
            className={styles["PageNavIndex__link"]}
            onClick={(event) => handleClick(event, `#${link.url}`)}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            data-menu-index={index}
            aria-selected={index === activeLink}
            href={`#${link.name}`}
          >
            {link.name}
          </Link>
        ))}
        <div
          className={styles["PageNavIndex__link-background"]}
          ref={(current) => (backgroundRef = current)}
          hidden={activeLink === null}
        ></div>
      </menu>
    )
  );
};

export default PageNavIndex;
