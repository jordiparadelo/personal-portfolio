import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
// Utils
import { splitContent } from "../../utils";

gsap.registerPlugin(ScrollTrigger);

//   Timeline
export let hasAnimationComplete = false;
const masterTl = gsap.timeline({onComplete: () => hasAnimationComplete = !hasAnimationComplete});

export const initAnimation = (mainEl) => {
  const index = mainEl.dataset.index;
  const delay = 0.3 * index;

  const [cover, description] = [
    mainEl.querySelector(".PortfolioCard__cover"),
    mainEl.querySelector(".PortfolioCard__description"),
  ];

  //   Animations
  function coverAnimation() {
    const [imgContainer, img] = [
      cover.querySelector("a"),
      cover.querySelector("img"),
    ];

    // Timeline
    const tl = gsap.timeline({
      defaults: { duration: 1.5, ease: "power2.out", delay: delay },
    });

    tl.addLabel("init")
      .from(imgContainer, {
        y: "100%",
        ease: "power2.out",
      })
      .from(
        img,
        {
          y: "-100%",
          scale: 1.2,
          ease: "power2.out",
        },
        "init"
      );
  }
  function descriptionAnimation() {
    const [detail, title, link] = [
      description.querySelector(".detail"),
      description.querySelector(".title"),
      description.querySelector(".link"),
    ];

    // Timeline
    const tl = gsap.timeline({delay: delay});

    // Loop nodes and add to timeline
    [detail, title, link].forEach((item) => {
      const stringTl = gsap.timeline();
      // Splitting Text
      const splitString = splitContent({ content: item });

      gsap.set(item, { overflow: "hidden" });
      gsap.set(splitString, { display: "inline-block" });

      stringTl.from(splitString, {
        y: "100%",
        opacity: 0,
        stagger: 0.08,
      });

      tl.add(stringTl);
    });
  }

  masterTl.add(coverAnimation()).add(descriptionAnimation());
};
