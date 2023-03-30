import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

//   Timeline
const masterTl = gsap.timeline({
  default: { duration: 2000, ease: "power3.out" },
});

export const initAnimation = (mainEl) => {
  const [line, projectFilters] = [
    mainEl.querySelector(".works__content > hr"),
    mainEl.querySelectorAll(".WorksFilters__fiter-item"),
  ];

  gsap.set(line, { xPercent: -100 })
  gsap.set(projectFilters, { yPercent: 100,})

  //   Animations
  const filterAnim = () =>
    masterTl
      .to(line,{ xPercent: 0, duration: 1 })
      .to(projectFilters,{
        yPercent: 0,
        stagger: 0.05,
      },
      "-=0.9"
    );

  masterTl.add(filterAnim);

  // Scroll
  ScrollTrigger.create({
    id: "Work",
    trigger: mainEl,
    start: "0% 50%",
    end: "120% 50%",
    animation: masterTl,
    // markers: true,
  });
};
