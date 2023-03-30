import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

//   Timeline
const masterTl = gsap.timeline({
  default: { duration: 2000, ease: "power3.out" },
});

export const initAnimation = (mainEl) => {
  const [header, listItems] = [
    mainEl.querySelector(".app__header-title"),
    mainEl.querySelectorAll(".ExperienceList__item"),
  ];

  // console.log({ header, listItems });

  //   Animations
  const listItemAnim = () => {
    const listItemMasterTl = gsap.timeline({
        default: { duration: 2000, ease: "power3.out"},
        scrollTrigger: {
            trigger: mainEl,
            scrub: true,
            once: true,
            start: "0% 50%",
            end: "100% 50%",
            markers: true,
          }
      });
    // Loop for each children
    listItems.forEach((item, index) => {
      const [itemChildren, line] = [
        item.querySelectorAll(".item-container > *"),
        item.querySelector(".divider"),
      ];

      // Timeline
      const listItemTl = gsap.timeline();

      listItemTl
        .from(itemChildren, { yPercent: 100, opacity: 0, stagger: 0.09 })
        .from(line, {
          xPercent: -100,
        }, "-=0.5");

        listItemMasterTl.add(listItemTl, "-=0.5")
    });

    // Return nested animation in timeline
    return listItemMasterTl;
  };

  masterTl.from(header, { opacity: 0 });
//   masterTl.from(header, { opacity: 0 }).add(listItemAnim);

  // Scroll
  ScrollTrigger.create({
    id: "Skills",
    trigger: mainEl,
    start: "0% 50%",
    end: "120% 50%",
    animation: masterTl,
    // markers: true,
  });
};
