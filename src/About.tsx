import withTransition from "@components/common/withTransition";
import WrapperMask from "@components/common/wrapper-mask";
import Heading from "@components/headings";
import Layout from "@components/layout";
import { aboutDetails } from "@helpers/data-dump";
import {
  childMotionVariants,
  headerMotionVariants,
  initialMotionVariants,
} from "@helpers/motion-variables";
import { motion } from "framer-motion";
import React from "react";

const About = () => {
  return (
    <Layout.Wrapper variants={initialMotionVariants}>
      <Layout.Section
        direction="left"
        className="w-full overflow-y-auto pt-[10%] lg:w-full"
      >
        <WrapperMask>
          <Heading.Wrapper
            variants={headerMotionVariants}
            className="cursor-default text-[10vw]"
          >
            {aboutDetails.header}
          </Heading.Wrapper>
        </WrapperMask>
        <Layout.ContentWrapper
          direction="left"
          className="mb-20  w-full overflow-y-scroll lg:w-[45%]"
          variants={childMotionVariants}
        >
          <div className="space-y-4">
            {aboutDetails.description.map((desc, i) => (
              <motion.p variants={childMotionVariants} key={i} className="">
                {desc}
              </motion.p>
            ))}
          </div>
          <div className="mt-20">
            <Heading.Wrapper className="text-4xl tracking-wider">
              Skills
            </Heading.Wrapper>
            <div className="flex flex-wrap items-center">
              {aboutDetails.skills.map((skill, i) => {
                return (
                  <React.Fragment key={i}>
                    <p className="">{skill}</p>
                    {i < aboutDetails.skills.length - 1 && (
                      <p className="mx-2 h-1 w-1 rounded-full bg-foreground">
                        {" "}
                      </p>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
            <div className="mt-5">
              <motion.a
                href="#"
                className="group relative mt-1 inline-block"
              >
                <span className="relative z-10 block overflow-hidden rounded-2xl border-2 border-neutral-900 px-5 py-2 font-semibold leading-tight text-gray-800 transition-colors duration-300 ease-out group-hover:text-white">
                  <span className="ease rop absolute left-0 -ml-2 h-48 w-48 origin-top-right -translate-x-full translate-y-12 -rotate-90 bg-neutral-900 transition-all duration-300 group-hover:-rotate-180"></span>
                  <span className="relative group-hover:text-white">
                    My Resume
                  </span>
                </span>
              </motion.a>
            </div>
          </div>
        </Layout.ContentWrapper>
      </Layout.Section>
    </Layout.Wrapper>
  );
};

export default () => withTransition(About);
