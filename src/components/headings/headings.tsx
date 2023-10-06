import { Variants, motion } from "framer-motion";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
};

const Wrapper = ({ children, className = "", variants = {} }: Props) => {
  const classes = `group mb-10  font-Rafins uppercase transition-all ${className}`;

  return (
    <motion.div
      variants={variants}
      animate="animate"
      initial="initial"
      exit="exit"
      layout
      style={{ lineHeight: 0.9 }}
      className={classes}
    >
      {children}
    </motion.div>
  );
};

const SubHeading = ({ children, className = "" }: Props) => {
  const classes = `flex items-center justify-start space-x-3 font-Montserrat text-sm uppercase text-secondary ${className}`;

  return <div className={classes}>{children}</div>;
};

export { Wrapper, SubHeading };
