import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

export const initAnimation = (mainEl) => {
  const [headerTitle, projectCover, projectDetails, description] = [
    mainEl.querySelector(".LastProject__header h2"),
    mainEl.querySelector(".LastProject__cover"),
    mainEl.querySelector(".LastProject__details"),
    mainEl.querySelector(".LastProject__description"),
  ];
  let animationReady = false;

  //   Animation Timlines
  const masterTl = gsap.timeline({  default: { duration: 2000, ease: "power3.out" },});

  masterTl
    .from(
      headerTitle,
      {
        xPercent: 20,
        opacity: 0,
        duration: 1,
        delay: 0.5,
      },
      "titleAnimation"
    )
    .from(
      projectCover,
      {
        yPercent: 200,
        duration: 2,
        onComplete: () => (animationReady = !animationReady),
      },
      "-=0.8"
    )
    .from(
      projectDetails.children,
      {
        xPercent: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
      },
      "titleAnimation+=0.8"
    )
    .from(
      description.children,
      {
        opacity: 0,
        stagger: 0.08,
      },
      "-=0.8"
    );

  // Scroll
  ScrollTrigger.create({
    id: "Last Project",
    trigger: mainEl,
    start: "-20% 50%",
    animation: masterTl,
    onEnter: () => initListener(),
    onEnterBack: () => initListener(),
    onLeave: () => removeListener(),
    onLeaveBack: () => removeListener(),
    // markers: true,
  });

  // Methods
  function handleMouseMove(event) {
    const { x: mouseX, y: mouseY } = event;

    if (animationReady) {
      gsap.to(projectCover, {
        xPercent: (mouseX / 125) * -1,
        yPercent: (mouseY / 125) * -2,
        ease: "power3.out",
        duration: 1,
      });
      gsap.to(headerTitle, {  xPercent: (mouseX / 100) * -1,});
    }
  }

  //   Listeners
  const initListener = () =>  window.addEventListener("mousemove", handleMouseMove, true);
  const removeListener = () =>   window.removeEventListener("mousemove", handleMouseMove, true)

};
