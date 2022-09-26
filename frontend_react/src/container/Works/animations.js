import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

export const transition = { duration: 1, ease: [0.22, 1, 0.36, 1] };

export const worksAnimation = (element) => {
  const [headerChilds, filters] = [
    element.querySelectorAll(".app__header *"),
    element.querySelectorAll(".works__filter *"),
  ];
  const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

  tl.from( headerChilds, {
      opacity: 0,
      y: 20,
      duration: 1,
      stagger: 0.2,
    },
    "header"
  )
  .from(filters,{
      x: 20,
      opacity: 0,
      stagger: 0.2,
    },
    "-=0.8"
  )

  // Scroll
  ScrollTrigger.create({
    id: "works",
    trigger: element,
    start: "0% 75%",
    end: "0% 75%",
    // markers: true,
    animation: tl,
  });
};
