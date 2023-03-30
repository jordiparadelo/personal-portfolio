import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

//   Timeline
const masterTl = gsap.timeline({
  default: { duration: 2000, ease: "power3.out" },
});
const transitionTl = gsap.timeline({
  default: { duration: 2000, ease: "power3.out" },
});

export const initAnimation = (mainEl) => {
  masterTl.from(mainEl, { yPercent: 100, delay: 0.5 });

  // Scroll
  ScrollTrigger.create({
    id: "Slider",
    trigger: "#Works",
    start: "0% 50%",
    animation: masterTl,
    // markers: true,
  });
};

export const transitionIn = (mainEl) => {
  console.log("tansition In", { mainEl });

  const image = mainEl.querySelector("img");
  // gsap.set(mainEl, { yPercent: 100 });
  // gsap.set(image, { scale: 1.1, opacity: 0.6 });

  transitionTl.from(mainEl, { yPercent: 200 }).from(
    image,
    {
      opacity: 1,
      scale: 1,
      ease: "power3.out",
    },
    "-=0.5"
  );
};

export const transitionOut = (mainEl) => {
  // console.log("tansition Out", { mainEl });
  // transitionTl.progress(0).revert()
  // masterTl.kill();
  gsap.to(mainEl, { yPercent: 100, ease: "power3.out" });
};
