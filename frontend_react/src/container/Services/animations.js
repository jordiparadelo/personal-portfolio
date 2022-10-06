import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

export const initAnimation = (mainEl) => {
  // console.log({ mainEl });
  const [header, servicesCards, scrollRows] = [
    mainEl.querySelector(".app__header"),
    mainEl.querySelector(".ServicesCards"),
    mainEl.querySelectorAll(".HorizontalScroll__row"),
  ];

  // Animation Timlines
  const masterTl = gsap.timeline({
    default: { duration: 2000, ease: "power3.out" },
  });
  const scrollRowsTl = gsap.timeline( {onComplete: () => initScrollRows()});

  // gsap.set(servicesCards, {  visibility: "hidden",});

  masterTl
    .from(header.children, {
      opacity: 0,
      stagger: 0.5,
    })
    .add(scrollRowsTl);

  // scrollRows Animation
  scrollRows.forEach((row, index) => {
    const direction = index % 2 > 0 ? 1 : -1;

    scrollRowsTl.from( row.children, {
        xPercent: 50 * direction,
        opacity: 0,
        duration: 1,
        stagger: 0,
      },
      "-=0.5"
    );
  });

  // Methods
  function initScrollRows() {
    scrollRows.forEach((row, index) => {
      const direction = index % 2 > 0 ? 1 : -1;
      gsap.from(row.children, {
        xPercent: 10 * direction,
        scrollTrigger: {
          trigger: mainEl,
          start: "-100% 50%",
          end: "200% 50%",
          scrub: true,
        },
      });
    });
  }

  // Scroll
  ScrollTrigger.create({
    id: "Services",
    trigger: mainEl,
    start: "-20% 50%",
    end: "120% 50%",
    animation: masterTl,
    markers: true,
  });
};
