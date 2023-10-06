import { MotionStyle, Variants, motion } from "framer-motion";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  style?: MotionStyle;
};

const Wrapper = ({ children, className, variants = {}, style = {} }: Props) => {
  return (
    <motion.div
      style={style}
      variants={variants}
      animate="animate"
      initial="initial"
      exit="exit"
      className={`ml-auto flex w-[90%] flex-col pl-2 md:pl-10 lg:flex-row lg:space-x-20 lg:pl-0 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const Section = ({
  children,
  className,
  variants = {},
  style = {},
  direction,
}: Props & { direction: "right" | "left" }) => {
  const classes =
    direction === "left"
      ? "lg:w-1/2 w-full pr-10 font-Montserrat"
      : "w-full overflow-x-hidden lg:overflow-y-auto";
  return (
    <motion.div
      style={style}
      variants={variants}
      animate="animate"
      initial="initial"
      exit="exit"
      className={`${classes} ${className}`}
    >
      {children}
    </motion.div>
  );
};

const ContentWrapper = ({
  children,
  className,
  variants = {},
  style = {},
  direction,
}: Props & { direction: "right" | "left" }) => {
  const classes = direction === "left" ? "text-base tracking-wide" : "";

  return (
    <motion.div
      style={style}
      variants={variants}
      initial="initial"
      animate="animate"
      className={`${classes} ${className}`}
    >
      {children}
    </motion.div>
  );
};

const Header = ({ children, className, variants = {}, style = {} }: Props) => {
  return (
    <motion.h1
      variants={variants}
      style={style}
      className={`font-Bricolage text-xl uppercase ${className}`}
    >
      {children}
    </motion.h1>
  );
};

const Content = ({ children, className, variants }: Props) => {
  return (
    <motion.div variants={variants} className={`mt-4 ${className}`}>
      {children}
    </motion.div>
  );
};
export { Section, Wrapper, ContentWrapper, Header, Content };
