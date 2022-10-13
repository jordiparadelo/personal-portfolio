import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import Splitting from "splitting";
gsap.registerPlugin(ScrollTrigger);

//   Timelines
const masterTl = gsap.timeline({
  default: { duration: 2000, ease: "power3.out" },
});

export const initAnimation = (mainEl) => {
  // console.log("init");
  const [projectHeader, projectContent, projectNavigation, backgroundTitle] = [
    mainEl.querySelector(".project-header"),
    mainEl.querySelector(".project-content"),
    mainEl.querySelector(".ProjectsSlider__navigation"),
    mainEl.querySelector(".ProjectSlider_background-title"),
  ];

  // // Splitting Text
  // const descriptionSplit = Splitting({ target: backgroundTitle, by: "words" });

  // // Description Lines Animation
  // descriptionSplit[0].words.forEach((word, index) => {
  //   console.log(word)
  //   gsap.from(word , { 
  //     yPercent: 100, 
  //     delay: index
  //   })
  // });

  gsap.set(projectHeader.children, {
    opacity: 0,
  });
  gsap.set(projectContent.children, {
    yPercent: 100,
    opacity: 0,
  });

  masterTl
    .to(projectHeader.children, {
      opacity: 1,
      duration: 1,
      stagger: 0.1,
    })
    .to(
      projectContent.children,
      {
        yPercent: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
      },
      "-=0.8"
    );

  // Scroll
  ScrollTrigger.create({
    id: "Slider",
    trigger: "#Works",
    start: "0% 50%",
    end: "120% 50%",
    animation: masterTl,
    // markers: true,
  });
};

export const restartAnimation = () => {
  masterTl.kill();
  masterTl.progress(0).resume(true);
};
