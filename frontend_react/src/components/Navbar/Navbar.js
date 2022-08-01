import React, { useEffect, useState } from "react";
// Assets
import { images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
// Lib
import { useMediaQuery } from "react-responsive";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
// Utils
import { scrollToTarget } from "../../utils";
// Syles
import "./Navbar.scss";
// Components
import { SocialMedia } from "../../components";

const navLinks = [
  { name: "About", url: "About" },
  { name: "Work", url: "Works" },
  { name: "Skills", url: "Skills" },
  { name: "Contact", url: "Footer" },
];
const navProjectLinks = [
  { name: "About", url: "About" },
  { name: "Work", url: "Works" },
  { name: "Contact", url: "Footer" },
];

/* ANIMATIONS */
// const transition = {duration: 1.4, ease: [0.6, 0.01, 0.05, 0.9]}
const transition = { duration: 1.4, ease: [0.22, 1, 0.36, 1] };

const navAnimation = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ...transition,
    },
  },
};
const menuAnimation = {
  animate: {
    transition: {
      ...transition,
      delayChildren: 0.6,
      staggerChildren: 0.05,
      staggerDirection: 1,
    },
  },
};
const linkAnimation = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {duration: 1, ease: transition.ease}
  },
};

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [links, setLinks] = useState(navLinks);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 600px)" });
  let location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setLinks(navLinks);
    } else if (location.pathname.includes("works")) {
      setLinks(navProjectLinks);
    }
  }, [location]);

  function handleNavClick(event) {
    scrollToTarget(event);
    setToggle((prevState) => !prevState);
  }

  return (
    <motion.nav
      className="navbar"
      initial="initial"
      animate="animate"
      variants={navAnimation}
    >
      <div className="app__wrapper">
        <Link to="/" className="navbar__logo">
          <img src={images.logo} alt="logo" width="48" height="48" />
          <h4 className="navbar__logo-name">
            Jordi
            <br />
            Paradelo
          </h4>
        </Link>
        <div className="navbar__menu-wrapper">
          <button
            className="navbar__menu-button"
            alt="Toggle navbar menu"
            onClick={() => setToggle((prevState) => !prevState)}
          >
            {toggle ? <HiX /> : <HiMenuAlt4 />}
          </button>
          <motion.menu
            className="navbar__navlinks"
            aria-hidden={isTabletOrMobile && !toggle}
            variants={menuAnimation}
          >
            {links.map((link, index) => (
              <motion.a
                href={`#${link.url}`}
                key={`link-${index}`}
                onClick={handleNavClick}
                variants={linkAnimation}
              >
                {link.name}
              </motion.a>
            ))}
            <SocialMedia />
          </motion.menu>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
