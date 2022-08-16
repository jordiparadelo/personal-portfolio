import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

export const transition = { duration: 1, ease: [0.22, 1, 0.36, 1] };

export const portfolioCardAnimation = (element, index) => {
  const [portfolioImages] = [
    element?.querySelectorAll(".works__portofilio-image img"),
  ];

  const cardAnimation = gsap.from(element, {
    opacity: 0,
    y: 100,
    duration: 1,
    delay: () => 0.3 * index,
    stagger: 0.2,
    scrollTrigger: {
      id: "works",
      trigger: '#Works',
      start: "20% 75%",
      // markers: true,
    },
  });

  const scrollAnimation = gsap.from(portfolioImages, {
    y: "20%",
    scrollTrigger: {
      id: "works",
      trigger: element,
      start: "0% 75%",
      // markers: true,
      scrub: 1,
    },
  });

  return {
    cardAnimation,
    killAnim: () => {
      cardAnimation.kill()
      scrollAnimation.kill()
      // cardAnimation.scrollTrigger.kill()
    }
  }
};
