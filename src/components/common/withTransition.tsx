import { motion } from "framer-motion";
import React from "react";

const withTransition = (ChildComponent: any) => {
  return (
    <React.Fragment>
      <ChildComponent />
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.92, 1, 0.26, 1] }}
        className="fixed left-0 top-0 h-screen w-full origin-bottom bg-foreground"
      ></motion.div>
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.92, 1, 0.26, 1] }}
        className="fixed left-0 top-0 h-screen w-full origin-top bg-foreground"
      ></motion.div>
    </React.Fragment>
  );
};

export default withTransition;
