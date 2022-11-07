import { gsap } from "gsap";
import Splitting from "splitting";

export const initAnimation = (mainEl) => {
  const [ titleLines, iconArrow, description] = [
    mainEl.querySelectorAll(".line-text"),
    mainEl.querySelector(".iconArrow"),
    mainEl.querySelector(".Header__description"),
  ];

  // Splitting Text
  const descriptionSplit = Splitting({ target: description, by: "lines" });

  //   Animations Timeline
  const tl = gsap.timeline({ default: { duration: 2000, ease: "power3.out" } });
  const linesTimeline = gsap.timeline();
  const arrowTimline = gsap.timeline();

  tl.from(
    titleLines,
    {
      yPercent: 100,
      opacity: 0,
      stagger: -0.2,
    },
    "titleLines"
  )
    .add("description")
    .add(linesTimeline, "description-=0.2")
    .add(arrowTimline, "description-=0.2");

  // Description Lines Animation
  descriptionSplit[0].lines.forEach((line, index) => {
    linesTimeline.from(
      line,
      { top: "2em", opacity: 0, stagger: 0, delay: 0.2 },
      `-=0.6`
    );
  });

  // Arrow Animation
  Array.from(iconArrow.children).forEach((child) => {
    const svgLength = child.getTotalLength();

    // console.log({ child, svgLength });
    gsap.set(child, { strokeDasharray: svgLength, strokeDashoffset: 0 });

    arrowTimline.from(child, {
      strokeDashoffset: svgLength,
    });
  });
};
