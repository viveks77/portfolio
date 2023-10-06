import withTransition from "@components/common/withTransition";
import WrapperMask from "@components/common/wrapper-mask";
import Heading from "@components/headings";
import Layout from "@components/layout";
import { workDetails } from "@helpers/data-dump";
import {
  childMotionVariants,
  initialMotionVariants,
} from "@helpers/motion-variables";

const Work = () => {
  return (
    <Layout.Wrapper variants={initialMotionVariants}>
      <Layout.Section direction="left" className="mt-auto lg:h-1/2">
        <Layout.ContentWrapper
          direction="left"
          className="pt-[15%]"
          variants={childMotionVariants}
        >
          <WrapperMask>
            <Layout.Header variants={childMotionVariants} className="">
              {workDetails.header}
            </Layout.Header>
          </WrapperMask>
          <WrapperMask>
            {workDetails.description.map((desc, i) => {
              return (
                <Layout.Content
                  variants={childMotionVariants}
                  key={i}
                  className=""
                >
                  <p>{desc}</p>
                </Layout.Content>
              );
            })}
          </WrapperMask>
        </Layout.ContentWrapper>
      </Layout.Section>
      <Layout.Section direction="right" className="pt-20 lg:pt-[20vh]">
        <Layout.ContentWrapper direction="right">
          {workDetails.experience.map((exp, i) => {
            return (
              <div key={i} className="mb-16 mr-7">
                <Heading.Wrapper className="mb-4 text-4xl tracking-wider md:text-[5vw] lg:ml-8  lg:text-[3.5vw]">
                  <span>{exp.company}</span>
                </Heading.Wrapper>
                <Heading.SubHeading className="text-sm lg:ml-14">
                  <span>{exp.title}</span>
                  <span> | </span>
                  <span>{exp.date}</span>
                  <span> | </span>
                  <span>{exp.location}</span>
                </Heading.SubHeading>
                <div className="ml-5 mt-5 lg:ml-14">
                  <ol className="list-disc space-y-2">
                    {exp.resp.map((v, i) => (
                      <li key={i}>{v}</li>
                    ))}
                  </ol>
                </div>
                <div className="mt-5 flex flex-wrap text-sm lg:ml-14">
                  {exp.technologies.map((tech, i) => {
                    return (
                      <div
                        key={i}
                        className="my-2 mr-3 rounded-full bg-foreground px-4 py-2 text-white"
                      >
                        {tech}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </Layout.ContentWrapper>
      </Layout.Section>
    </Layout.Wrapper>
  );
};

export default () => withTransition(Work);
