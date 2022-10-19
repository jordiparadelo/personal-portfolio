import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import Splitting from "splitting";
gsap.registerPlugin(ScrollTrigger);

export const initAnimation = (mainEl) => {
  const [links] = [mainEl.querySelectorAll(".PageNavIndex__link")];

  Array.from(links).forEach((link, index) => {
    const split = Splitting({ target: link, by: "chars" });
    const chars = split[0].chars;
    const charsTl = gsap.timeline();

    gsap.set(chars, { display: "inline-block" });

    charsTl.from(chars, {
      yPercent: 50,
      opacity: 0,
      stagger: 0.05,
    });

    masterTl.add(charsTl, "-=0.5");
  });
};

export const revertAnimation = () => {
  masterTl.revert();
};

// const masterTl = gsap.timeline({ default: {duration: 2000, }})
const masterTl = gsap.timeline({
  default: { duration: 2000 },
  onComplete: revertAnimation,
});
