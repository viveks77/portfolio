const initialMotionVariants = {
  initial: {
    filter: "blur(5px)",
    opacity: 0,
  },
  animate: {
    filter: "blur(0px)",
    opacity: 1,
    transition: {
      duration: 0.7,
      delay: 0.3,
    },
  },
};

const childMotionVariants = {
  initial: { y: 50, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      type: [0.78, 0.23, 0.45, 0.1],
      duration: 0.7,
      delayChildren: 0.2,
    },
  },
};

const headerMotionVariants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 10,
    opacity: 1,
  },
};

export { headerMotionVariants, childMotionVariants, initialMotionVariants };
