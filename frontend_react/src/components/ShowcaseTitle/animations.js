import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
// Utils
import { splitContent } from "utils";
gsap.registerPlugin(ScrollTrigger);

export const initAnimation = (mainEl) => {
  //   Master Timeline
  const masterTl = gsap.timeline({
    default: { ease: "power3.out" },
  });

  const [titles] = [
    mainEl.querySelectorAll("p")
  ];

  // Splitting Text
  titles.forEach((title) => {
    const titleWords = splitContent({content: title});

    titleWords.forEach((word, index) => {
      const chars = word.querySelectorAll(".char");
      gsap.set(word, { overflow: "hidden" });
      gsap.set(chars, { display: "inline-block", yPercent: 110 });

      masterTl.to(
        ".active .char",
        {
          yPercent: 0,
          stagger: "0.05",
          duration: 0.5,
        },
        `-=${index * 0.2}`
      );
    });
  });

  // Scroll
  ScrollTrigger.create({
    id: "Title",
    trigger: "#Works",
    start: "0% 50%",
    end: "120% 50%",
    animation: masterTl,
    // markers: true,
  });
  
};

export const transitionIn = (mainEl) => {
  const [chars] = [mainEl.querySelectorAll(".char")];

  gsap.set(chars, { yPercent: -100, opacity: 0 });
  gsap.to(chars, { yPercent: 0, opacity: 1, stagger: "0.05" });
};
export const transitionOut = (mainEl) => {
  const [chars] = [mainEl.querySelectorAll(".char")];

  gsap.to(chars, {
    display: "inline-block",
    yPercent: 110,
    opacity: 0,
    stagger: "0.05",
  });
};
