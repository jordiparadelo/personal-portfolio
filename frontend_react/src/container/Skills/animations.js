import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

export const skillsAnimation = (element) => {
  const [headerChilds, skills] = [
    element?.querySelectorAll(".app__header *"),
    [...element?.querySelectorAll(".skills__list-item")],
  ];

  const headerAnimation = gsap.from(headerChilds, {
    opacity: 0,
    y: 20,
    ease: "Power2.out",
    duration: 0.5,
    stagger: 0.1,
    scrollTrigger: {
      id: "header",
      trigger: element,
      start: "0% 75%",
    //   markers: true,
    },
  });

//   skills.forEach((skill) => {
//     const [year, path, description] = [
//       skill?.querySelectorAll(".year"),
//       skill?.querySelectorAll(".skills__year-path"),
//     ];
//     const tl = gsap.timeline({ defaults: { ease: "power2.out" }})

//     tl.to(year, {
//         background: "var(--dark-color)",
//         color: "var(--light-color)"
//     })
//     .to(path, {
//         height: '100%',
//     })

//     ScrollTrigger.create({
//         id: "skills",
//         trigger: skill,
//         start: "0% 60%",
//         end: "80% 30%",
//         scrub: 1,
//         markers: true,
//         animation: tl,
//       });
    
//   });

  return {
    killAnim: () => {
      headerAnimation.kill();
      // cardAnimation.scrollTrigger.kill()
    },
  };
};
