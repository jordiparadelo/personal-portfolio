import React, { useState, useRef } from "react";
// Styles
import "./DotNavigation.scss";
// Utils
import {scrollToTarget} from "../../utils";

const navLinks = [
  { name: "Home", url: "Home" },
  { name: "About", url: "About" },
  { name: "Contact", url: "Contact" },
  { name: "Work", url: "Works" },
  { name: "Skills", url: "Skills" },
];

const DotNavigation = () => {
  const [activeLink, setActiveLink] = useState(null)
  const linkRef = useRef(navLinks.map(() => React.createRef()))

  function handleLinkClick(event) {
    scrollToTarget(event)
    setActiveLink(event.currentTarget)
  }

  return (
    <nav className="dot-navigation">
      {navLinks.map((link, index) => (
        <a
          href={`#${link.url}`}
          key={`dot-link-${index}`}
          className={`dot-navigation__link ${activeLink == linkRef.current[index].current ? "active" : ""}`}
          onClick={handleLinkClick}
          ref={linkRef.current[index]}
        ></a>
      ))}
    </nav>
  );
};

export default DotNavigation;
