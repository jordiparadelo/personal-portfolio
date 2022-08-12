const transition = { duration: 1, ease: [0.22, 1, 0.36, 1] };

export const dotContainerAnimation = {
    animate: {
        transition: {
            ...transition,
            delayChildren: transition.duration,
            staggerChildren: 0.05,
        }
    }
}
export const dotAnimation = (index) => {
  return {
    initial: {
      y: -20 * index,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        ...transition,
        delay: 2,
      },
    },
  };
};
