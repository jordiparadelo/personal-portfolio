import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

export const transition = { duration: 1, ease: [0.22, 1, 0.36, 1] };

export const imgParallax = (element) => {

  const images = [...element.querySelectorAll(".works__portofilio-image img")];

  images.forEach((image) => {
    gsap.to(image, {
      y: "50%",
      scrollTrigger: {
        id: "images",
        scrub: true,
      },
    });
  });
};

export const staggerAnimation = {
  animate: {
    transition: {
      delayChildren: 1.5,
      staggerChildren: 0.1,
    },
  },
};

export const portfolioCardAnimation = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ...transition,
    },
    exit: {
      y: 100,
      opacity: 1,
      transition: {
        ...transition,
      },
    },
  },
};
