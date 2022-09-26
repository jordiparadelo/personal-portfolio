import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

export const skillAnimation = (element) => {
  const skillItems = [...element.querySelectorAll(".skills__list-item")];
  let pathAnimation

  skillItems.forEach((item) => {
    const [year, path, descriptions] = [
      item?.querySelectorAll(".year"),
      item?.querySelectorAll(".skills__year-path"),
      [...item?.querySelectorAll(".skills__description-container > *")],
    ];

    /* PATH ANIMATION */
    pathAnimation = gsap.to(path, {
      height: "100%",
      scrollTrigger: {
        id: "path",
        trigger: path,
        start: "0% 60%",
        end: "100% 60%",
        scrub: 1,
        // markers: true,
      },
    });

    /* DESCRIPTION ANIMATION */
    descriptions.forEach((description, index) => {
      const elementChilds = description.childNodes;
      // console.log({description, elementChilds})
      gsap.from(elementChilds, {
        opacity: 0,
        y: 20,
        stagger: 0.2,
        scrollTrigger: {
          id: "path",
          trigger: path,
          start: "0% 60%",
          end: "100% 60%",
          scrub: 1,
          // markers: true,
        },
      });
    });
  });

  return {
    killAnim: () => {
      pathAnimation.kill();
    },
  };
};
