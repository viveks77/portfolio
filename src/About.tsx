import withTransition from "@components/common/withTransition";
import WrapperMask from "@components/common/wrapper-mask";
import Heading from "@components/headings";
import Layout from "@components/layout";
import { aboutDetails } from "@helpers/data-dump";
import {
  headerMotionVariants,
  initialMotionVariants,
} from "@helpers/motion-variables";
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
        >
          <div className="space-y-4">
            {aboutDetails.description.map((desc, i) => (
              <p key={i} className="">
                {desc}
              </p>
            ))}
          </div>
          <div className="mt-20">
            <Heading.Wrapper className="text-4xl tracking-wider">
              Skills
            </Heading.Wrapper>
            <div className="flex flex-wrap">
              {aboutDetails.skills.map((skill, i) => {
                return (
                  <React.Fragment key={i}>
                    <p className="">{skill}</p>
                    {i < aboutDetails.skills.length - 1 && (
                      <p className="mx-2"> / </p>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
            <div className="mt-10">
              <button className="rounded-full bg-foreground px-7 py-3 text-2xl text-white transition-all hover:px-16">
                My Résumé
              </button>
            </div>
          </div>
        </Layout.ContentWrapper>
      </Layout.Section>
    </Layout.Wrapper>
  );
};

export default () => withTransition(About);
