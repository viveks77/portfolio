import { Variants } from "motion";

const initialMotionVariants: Variants = {
  initial: {
    filter: "blur(15px)",
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

const childMotionVariants: Variants = {
  initial: { y: 50, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      ease: 'easeInOut',
      duration: 0.7,
      delayChildren: 0.2,
    },
  },
};

const headerMotionVariants: Variants = {
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
