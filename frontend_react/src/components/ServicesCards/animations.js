import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
export const transition = { duration: 1.4, ease: [0.6, 0.01, 0.05, 0.9] };
gsap.registerPlugin(ScrollTrigger);

export const cardIntroAnimation = (element) => {
  const cards = [...element.children];

  cards.forEach((card, index) => {
    gsap.from(
      card, {
        x: 50,
        opacity: 0,
        delay: () => 0.1 * index,
        ease: transition.ease,
        scrollTrigger: {
            id: "cards",
            trigger: element,
            start: "0% 75%",
            // markers: true,
        }
      }
    );
  });
};
