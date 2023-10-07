import withTransition from "@components/common/withTransition";
import WrapperMask from "@components/common/wrapper-mask";
import Heading from "@components/headings";
import Layout from "@components/layout";
import { contactDetails } from "@helpers/data-dump";
import { childMotionVariants, headerMotionVariants } from "@helpers/motion-variables";

const Contact = () => {
  return (
    <Layout.Wrapper>
      <Layout.Section
        direction="left"
        className="w-full overflow-y-auto pt-[10%]"
      >
        <Layout.ContentWrapper direction="left">
          <WrapperMask>
            <Heading.Wrapper
              variants={headerMotionVariants}
              className="text-[10vw] tracking-widest"
            >
              Hello.
            </Heading.Wrapper>
          </WrapperMask>
          <Layout.Content variants={childMotionVariants} className="flex">
            <span>Email: </span>{" "}
            <a
              href={`mailto:${contactDetails.email}`}
              className="group w-fit px-3 font-medium"
            >
              <div className="">{contactDetails.email}</div>
              <div className="h-[2px] w-0 bg-foreground transition-all group-hover:w-full"></div>
            </a>
          </Layout.Content>
          <Layout.Content variants={childMotionVariants} className="flex mt-0">
            <span>Socials: </span>
            <div className="flex items-center font-medium">
              <a href={contactDetails.linkdin} className="group w-fit px-3">
                <div className="">Linkedin</div>
                <div className="h-[2px] w-0 bg-foreground transition-all group-hover:w-full"></div>
              </a>
              <span className="mx-1">/</span>
              <a href={contactDetails.github} className="group w-fit px-3">
                <div className="">Github</div>
                <div className="h-[2px] w-0 bg-foreground transition-all group-hover:w-full"></div>
              </a>
            </div>
          </Layout.Content>
        </Layout.ContentWrapper>
      </Layout.Section>
    </Layout.Wrapper>
  );
};

export default () => withTransition(Contact);
