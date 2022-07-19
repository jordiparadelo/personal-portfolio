import React, { useEffect, useState } from "react";
// Assets
import { images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
// Lib
import { useMediaQuery } from 'react-responsive'
// Utils
import {scrollToTarget} from "../../utils";
// Syles
import "./Navbar.scss";

const navLinks = [
  { name: "Home", url: "Home" },
  { name: "About", url: "About" },
  { name: "Contact", url: "Contact" },
  { name: "Work", url: "Works" },
  { name: "Skills", url: "Skills" },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const isTabletOrMobile = useMediaQuery({query: '(max-width: 600px)'})

  function handleNavClick(event) {
    scrollToTarget(event)
    setToggle((prevState) => !prevState)
  }

  return (
    <nav className="navbar">
      <div className="app__wrapper">
      <div className="navbar__logo">
        <img src={images.logo} alt="logo" />
      </div>
      <div className="navbar__menu-wrapper">
        <button
          className="navbar__menu-button"
          alt="Toggle navbar menu"
          onClick={() => setToggle((prevState) => !prevState)}
        >
          {toggle ? <HiX /> : <HiMenuAlt4 />}
        </button>
        <menu
          className="navbar__navlinks"
          aria-hidden={isTabletOrMobile && !toggle}
        >
          {navLinks.map((link, index) => (
            <a
              href={`#${link.url}`}
              key={`link-${index}`}
              className="app__flex p-text"
              onClick={handleNavClick}
            >
              {link.name}
            </a>
          ))}
        </menu>
      </div></div>
    </nav>
  );
};

export default Navbar;
