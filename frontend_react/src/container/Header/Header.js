import React, { useLayoutEffect, useRef } from "react";
// Lib
import Lottie from "lottie-react";
import { motion } from "framer-motion";
// Utils
import { scrollToTarget } from "../../utils";
// Assets
import { images } from "../../constants";
// Styles
import "./Header.scss";
// Components
import { DotNavigation } from "../../components";
// Context
import { useAnimationContext } from "../../context/AnimationContext";
// Animations
import {headerAnimation} from './animations'

const Header = () => {
  const {pageLoading} = useAnimationContext()
  let header = useRef(null)

  useLayoutEffect(() => {
    headerAnimation(header)
  },[])

  return (
    <section id="Header" className="header" ref = {(current) => header = current}>
      <div className="app__wrapper">
        <div
          className="header__content"
        >
          <div className="header__title-container">
            <div
              className="app__section-label"
            >
              Freelancer
            </div>
            <h1
              className="header__title"
            >
              Web Designer And Developer
            </h1>
          </div>

          <div
            className="header__description"
          >
            <p>
              Hi<span className="header__title-icon">👋</span> i'm Jordi, I'm a
              based designer who develop webs and app, from the concept design
              to the execution.
            </p>
          </div>

          <div className="header__actions">
            <a
              href="#Footer"
              className="button primary"
              onClick={scrollToTarget}
            >
              Let's Talk
            </a>
            <a
              className="button secondary"
              href="#Works"
              onClick={scrollToTarget}
            >
              Check the Works
            </a>
          </div>
        </div>

        <div
          className="header__image"
        >
          <Lottie animationData={images.headerAnimation} loop={true} />
        </div>
      </div>
      <DotNavigation />
    </section>
  );
};

export default Header;
