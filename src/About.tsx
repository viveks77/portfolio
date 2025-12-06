import withTransition from "@components/common/withTransition";
import WrapperMask from "@components/common/wrapper-mask";
import Heading from "@components/headings";
import Layout from "@components/layout";
import { aboutDetails } from "@helpers/data-dump";
import {
  headerMotionVariants,
  initialMotionVariants,
} from "@helpers/motion-variables";
import { motion } from "framer-motion";

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
          className="mb-20  w-full overflow-y-hidden lg:w-[45%]"
        >
          <div className="space-y-4">
            {aboutDetails.description.map((desc, i) => (
              <motion.p  key={i} className="">
                {desc}
              </motion.p>
            ))}
          </div>
          <div className="mt-20">
            <Heading.Wrapper  className="text-5xl tracking-widest">
              Skills
            </Heading.Wrapper>
            <div className="space-y-1">
              {aboutDetails.skills.map((skill, i) => {
                return (
                  <motion.div className="font-" key={i}>
                    <span className="mr-2">{skill.title}: </span>
                    <span className="font-medium">{skill.tech.join(", ")}</span>
                  </motion.div>
                );
              })}
            </div>
            <div className="mt-5">
              <motion.a data-element-type='button' href={aboutDetails.resume} className="group relative mt-1 inline-block">
                <span className="relative z-10 block overflow-hidden rounded border-2 border-neutral-900 px-5 py-2 font-semibold leading-tight text-gray-800 transition-colors duration-300 ease-out ">
                  My Resume
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
