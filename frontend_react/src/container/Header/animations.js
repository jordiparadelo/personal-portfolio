export const transition = { duration: 1.4, ease: [0.6, 0.01, 0.05, 0.9] };

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