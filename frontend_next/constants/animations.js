import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import ScrollTrigger from "gsap/ScrollTrigger";

// import {Splitting} from "splitting/dist/splitting";
// import "splitting/dist/splitting.css";
// import "splitting/dist/splitting-cells.css";
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
