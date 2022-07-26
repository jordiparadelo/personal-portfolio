import React, { useState, useRef, useEffect } from "react";
// Styles
import "./DotNavigation.scss";
// Utils
import { scrollToTarget } from "../../utils";
// Lib
import { motion } from "framer-motion";
// Animations
import {dotContainerAnimation,  dotAnimation } from "./animations";

const navLinks = [
  { name: "Header", url: "Header" },
  { name: "About", url: "About" },
  { name: "Work", url: "Works" },
  { name: "Skills", url: "Skills" },
  { name: "Contact", url: "Footer" },
];

const DotNavigation = () => {
  const [activeLink, setActiveLink] = useState(null);
  const navLinksRef = useRef(navLinks.map(() => React.createRef()));

  function handleLinkClick(event) {
    scrollToTarget(event);
  }

  useEffect(() => {
    setTimeout(() => {
      const sectionsColletion = navLinksRef.current.map(({ current }) => {
        const id = current.hash;
        return document.querySelector(id);
      });

      const sectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const { target } = entry;
            const activeLink = navLinksRef?.current.find(({ current }) =>
              current?.hash.includes(target.id)
            );
            activeLink?.current.classList.toggle(
              "active",
              entry.isIntersecting
            );
          });
        },
        {
          threshold: [0.2, 0.5],
        }
      );

      // // Listeners
      sectionsColletion.forEach((section) => sectionObserver?.observe(section));
    }, 1000);
  }, []);

  return (
    <motion.nav className="dot-navigation" variants={dotContainerAnimation} initial="initial"
    animate="animate">
      {navLinks.map((link, index) => (
        <motion.a
          href={`#${link.url}`}
          key={`dot-link-${index}`}
          className={`dot-navigation__link ${
            activeLink == navLinksRef.current[index].current ? "active" : ""
          }`}
          onClick={handleLinkClick}
          ref={navLinksRef.current[index]}
          variants={dotAnimation(index)}
        ></motion.a>
      ))}
    </motion.nav>
  );
};

export default DotNavigation;
