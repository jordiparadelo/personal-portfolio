const transition = { duration: 1.4, ease: [0.22, 1, 0.36, 1] };

export const navAnimation = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ...transition,
      delay: 1,
      delayChildren: 1 + 0.6,
      staggerChildren: 0.05,
      staggerDirection: 1,
    },
  },
};
export const menuAnimation = {
  animate: {
    transition: {
      ...transition,
      delayChildren: 0.6,
      staggerChildren: 0.05,
      staggerDirection: 1,
    },
  },
};
export const linkAnimation = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: transition.ease },
  },
};
