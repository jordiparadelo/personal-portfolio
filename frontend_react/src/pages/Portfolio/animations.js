import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

function calcWidthOnResize(element) {
  let widthResized = element.clientWidth - window.innerWidth;
  return widthResized;
}

export const scrollAnimation = (mainEl) => {
  let totalWidth = calcWidthOnResize(mainEl);

  gsap.to(mainEl, {
    x: () => totalWidth * -1 + "px",
    scrollTrigger : {
      id: "Scroll",
      trigger: "#Portfolio",
      end: `${totalWidth * 2 + "px`"}`,
      scrub: 0.5,
      pin: true,
      markers: true,}
  });

  // Refresh scrollTrigger on resize
  ScrollTrigger.addEventListener(
    "refreshInit",
    () => (totalWidth = calcWidthOnResize(mainEl))
  );
  ScrollTrigger.addEventListener(
    "refresh",
    () => (totalWidth = calcWidthOnResize(mainEl))
  );
};

export const restartScroolAnimation = () => {
  ScrollTrigger.getById("Scroll").kill();
};
