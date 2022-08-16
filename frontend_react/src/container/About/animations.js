import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

export const transition = { duration: 1.4, ease: [0.6, 0.01, 0.05, 0.9] };

export const aboutAnimation = (element) => {
  const [headerChilds, technologies] = [
    element.querySelectorAll(".about__title-container *"),
    element.querySelectorAll(".about__technologies *"),
  ];

  const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

  tl.from(headerChilds, {
    opacity: 0,
    y: 20,
    ease: transition.ease,
    duration: 1,
    stagger: 0.1,
  }).from(technologies,{
      opacity: 0,
      y: 20,
      duration: 0.5,
      stagger: 0.08,
    },
    "-=1"
  );

  ScrollTrigger.create({
    id: "header",
    trigger: element,
    start: "0% 75%",
    // markers: true,
    animation: tl,
  });
};
