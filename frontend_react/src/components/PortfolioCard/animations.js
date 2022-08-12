export const transition = { duration: 1, ease: [0.22, 1, 0.36, 1] };

export const staggerAnimation = {
  animate: {
    transition: {
      delayChildren: 1.5,
      staggerChildren: 0.1,
    },
  },
};

export const portfolioCardAnimation = (index) => {
  return {
    initial: {
      y: 50,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        ...transition,
        delay: 0.08 * index
      },
    },
    exit: {
      y: 50,
      opacity: 0,
    },
  };
};
