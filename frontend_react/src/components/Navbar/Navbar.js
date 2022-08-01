import React, { useEffect, useState } from "react";
// Assets
import { images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
// Lib
import { useMediaQuery } from "react-responsive";
import { Link, useLocation } from "react-router-dom";
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

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [links, setLinks] = useState(navLinks);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 600px)" });
  let location = useLocation();

  useEffect(() =>{
    if(location.pathname === "/") {
      setLinks(navLinks)
    } else if (location.pathname.includes("works")) {
      setLinks(navProjectLinks)
    }
  },[location])

  function handleNavClick(event) {
    scrollToTarget(event);
    setToggle((prevState) => !prevState);
  }

  return (
    <nav className="navbar">
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
          <menu
            className="navbar__navlinks"
            aria-hidden={isTabletOrMobile && !toggle}
          >
            {links.map((link, index) => (
              <a
                href={`#${link.url}`}
                key={`link-${index}`}
                onClick={handleNavClick}
              >
                {link.name}
              </a>
            ))}
            <SocialMedia />
          </menu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
