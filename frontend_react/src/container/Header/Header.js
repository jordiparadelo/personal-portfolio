import React from "react";
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

/* ANIMATIONS */
const transition = { duration: 1.4, ease: [0.6, 0.01, 0.05, 0.9] };

const staggerAnimation = {
  animate: {
    transition: {
      delayChildren: 1.5,
      staggerChildren: 0.1,
    },
  },
};
const childStaggerAnimation = {
  initial: { opacity: 0, y: 40 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: transition.ease },
  },
};

const Header = () => {
  return (
    <section id="Header" className="header">
      <div className="app__wrapper">
        <motion.div
          className="header__content"
          variants={staggerAnimation}
          initial="initial"
          animate="animate"
        >
          <div className="header__title-container">
            <motion.div
              variants={childStaggerAnimation}
              className="app__section-label"
            >
              Freelancer
            </motion.div>
            <motion.h1
              variants={childStaggerAnimation}
              className="header__title"
            >
              Web Designer And Developer
            </motion.h1>
          </div>

          <motion.div
            className="header__description"
            variants={childStaggerAnimation}
          >
            <p>
              Hi<span className="header__title-icon">👋</span> i'm Jordi, I'm a
              based designer who develop webs and app, from the concept design
              to the execution.
            </p>
          </motion.div>

          <div className="header__actions">
            <motion.a
              href="#Footer"
              className="button primary"
              onClick={scrollToTarget}
              variants={childStaggerAnimation}
            >
              Let's Talk
            </motion.a>
            <motion.a
              className="button secondary"
              href="#Works"
              onClick={scrollToTarget}
              variants={childStaggerAnimation}
            >
              Check the Works
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="header__image"
          initial={{ x: "-50%" }}
          animate={{ x: "0", transition: { ...transition, delay: 1 } }}
        >
          <Lottie animationData={images.headerAnimation} loop={true} />
        </motion.div>
      </div>
      <DotNavigation />
    </section>
  );
};

export default Header;
