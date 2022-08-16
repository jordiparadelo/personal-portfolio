import { gsap } from "gsap";
export const transition = { duration: 1.4, ease: [0.6, 0.01, 0.05, 0.9] };

export const headerAnimation = (element) => {
  const [header, headerChilds, image] = [
    element.querySelector(".header__content"),
    element.querySelectorAll(".header__content *"),
    element.querySelector(".header__image"),
  ];
  const tl = gsap.timeline(transition.ease);

  function handleScrollBody(condition) {
    condition 
    ? document.body.style.overflowY = 'hidden'
    : document.body.removeAttribute('style');
  }

  handleScrollBody(true)

  tl.from(image, {
    position: "relative",
    left: "-50%",
    x: "50%",
    delay: 1.5,
    duration: 1,
    ease: transition.ease,
    onComplete: () => handleScrollBody(false),
  }).from(headerChilds, {
    opacity: 0,
    y: 20,
    duration: 0.8,
    ease: transition.ease,
    stagger: 0.08
  }, '-=0.8');
};

export const staggerAnimation = {
  animate: {
    transition: {
      delayChildren: 1.5,
      staggerChildren: 0.1,
    },
  },
};
export const childStaggerAnimation = {
  initial: { opacity: 0, y: 40 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: transition.ease },
  },
};
