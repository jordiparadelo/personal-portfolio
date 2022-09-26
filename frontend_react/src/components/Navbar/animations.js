import { gsap } from "gsap";
export const transition = { duration: 1.4, ease: [0.6, 0.01, 0.05, 0.9] };

export const navbarAnimation = (element) => {
  const [logo, logoName, links] = [element.querySelector('.navbar__logo'), element.querySelector('.navbar__logo-name'),element.querySelectorAll('.navbar__navlinks *')];
  const tl = gsap.timeline(transition.ease)
  
  tl.from(element, {
    y: -100, 
    duration: transition.duration
  })
  .from(logoName , {
    opacity: 0
  })
  .from(links, {
    y: -100, 
    duration: 1,
    ease: transition.ease,
    stagger: 0.1

  }, "-=0.8")
};
