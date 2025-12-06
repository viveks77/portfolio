
import withTransition from "@components/common/withTransition";
import WrapperMask from "@components/common/wrapper-mask";
import Heading from "@components/headings";
import Layout from "@components/layout";
import { contactDetails, projectDetails } from "@helpers/data-dump";
import {
  childMotionVariants,
  initialMotionVariants,
} from "@helpers/motion-variables";

const Project = () => {
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
              Selected Projects
            </Layout.Header>
          </WrapperMask>
          <WrapperMask>
            <Layout.Content variants={childMotionVariants}>
              My portfolio showcases some of my best work using a variety of modern technologies. I enjoy learning new tools and adapting quickly in a fast-changing tech landscape.
            </Layout.Content>
          </WrapperMask>
        </Layout.ContentWrapper>
      </Layout.Section>
      <Layout.Section direction="right" className="pt-20 lg:pt-[20vh]">
        <Layout.ContentWrapper direction="right" className="">
          {projectDetails.projectsLink.map((proj, i) => {
            return (
              <div key={i} className="mb-12 mr-7">
                <Heading.Wrapper className="mb-4 flex text-4xl tracking-wider md:text-[5vw]  lg:ml-14 lg:text-[4.5vw] hover:-skew-x-6 hover:translate-x-2">
                  <a target="_blank" data-element-type='link' href={proj.href}>{proj.title}</a>
                </Heading.Wrapper>
                <Heading.SubHeading className="mb-4 lg:ml-14">
                  {proj.subTitle}
                </Heading.SubHeading>
                <div className="w-fit lg:ml-14">
                  <a data-element-type='button' href={proj.github} target="_blank" className="group">
                    <div>Source </div>
                    <div className="h-[2px] w-0 bg-foreground transition-all group-hover:w-full"></div>
                  </a>
                </div>
                <div className="mt-5 flex flex-wrap text-sm lg:ml-14">
                  {proj.techStack.map((tech, i) => {
                    return (
                      <div
                        key={i}
                        data-element-type='pill'
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
          <div className="group mb-14 w-fit lg:ml-12 lg:px-3">
            <a data-element-type='button' href={contactDetails.githubRepositories} target="_blank">
              <div>View all {">"} </div>
              <div className="h-[2px] w-0 bg-foreground transition-all group-hover:w-full"></div>
            </a>
          </div>
        </Layout.ContentWrapper>
      </Layout.Section>
    </Layout.Wrapper>
  );
};

export default () => withTransition(Project);
