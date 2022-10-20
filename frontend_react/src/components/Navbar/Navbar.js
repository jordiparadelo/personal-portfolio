import React, { useEffect, useState } from "react";
// Assets
import { images } from "constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
// Lib
import { useMediaQuery } from "react-responsive";
import { Link, useLocation } from "react-router-dom";
// Utils
import { scrollToTarget } from "utils";
// Syles
import "./Navbar.scss";
// Components
import { SocialMedia, PageNavIndex } from "components";

const navLinks = [
  { name: "Portfolio", url: "portfolio" },
];
let navProjectLinks = [
  { name: "Services", url: "Services" },
  { name: "Works", url: "Works" },
  { name: "Experience", url: "Experience" },
  { name: "Contact", url: "Footer" },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [links, setLinks] = useState(navLinks);
  const [navMenu, setNavMenu] = useState(navProjectLinks);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 600px)" });
  let location = useLocation();

  useEffect(() =>{
    // console.log({location: location.pathname});
    if(location.pathname === "/") {
      setLinks(navLinks)
      setNavMenu(navProjectLinks)
    } else if (location.pathname.includes("portfolio")) {
      setLinks(navProjectLinks)
      setNavMenu(null)
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
          <span className="navbar__logo-name">
            Jordi
            <br />
            Paradelo
          </span>
        </Link>
        <PageNavIndex links={navMenu}/>
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
              <Link
                to={`/${link.url}`}
                key={`link-${index}`}
              >
                {link.name}
              </Link>
            ))}
          </menu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
