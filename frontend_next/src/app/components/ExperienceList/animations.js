import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

//   Timeline
const masterTl = gsap.timeline({
  default: { duration: 2000, ease: "power3.out" },
});

export const initAnimation = (mainEl) => {
  const [listItems] = [
    mainEl.querySelectorAll(".ExperienceList__item"),
    ];

    // console.log({header, listItems})

  //   Animations
  const listItemAnim = () => {
    // Timeline
    const listItemTl = gsap.timeline({ duration: 1000, ease: "power3.out" });

    // Loop for each children
    listItems.forEach((item) => {
        const [line] = [
            // item.querySelectorAll(".item-container > *"),
            item.querySelector(".divider"),
        ];
        line.set(line, {xPercent: -100,})

      listItemTl
        // .from(itemsChildren, { yPercent: 100, opacity: 0 })
        .to(line,{
          xPercent: 0,
        }
      );
    });

    // Return nested animation in timeline
    return listItemTl;
  };

  masterTl.from(listItems, {opacity:0, stagger: 0.05}).add(listItemAnim);

  // Scroll
  ScrollTrigger.create({
    id: "List",
    trigger: mainEl,
    start: "0% 50%",
    end: "120% 50%",
    animation: masterTl,
    markers: true,
  });
};
