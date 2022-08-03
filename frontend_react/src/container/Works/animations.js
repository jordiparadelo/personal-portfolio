const transition = { duration: 1.4, ease: [0.22, 1, 0.36, 1] };

export const staggerAnimation = {
    animate: {
      transition: {
        delayChildren: 1.5,
        staggerChildren: 0.1,
      },
    },
  };

export const portfolioCardAnimation = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ...transition,
    },
    exit: { 
      y: 100,
      opacity: 1,
      transition: {
        ...transition,
      },
    }
  },
};