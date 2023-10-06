import HeaderLink from "@components/common/header-link";
import withTransition from "@components/common/withTransition";
import WrapperMask from "@components/common/wrapper-mask";
import Layout from "@components/layout";
import { headerLinks } from "@helpers/contants";
import {
  childMotionVariants,
  initialMotionVariants,
} from "@helpers/motion-variables";

const Home = () => {
  return (
    <Layout.Wrapper variants={initialMotionVariants} className="">
      <Layout.Section direction="left" className="mt-20 lg:mt-auto lg:h-1/2">
        <Layout.ContentWrapper
          direction="left"
          className="pt-[15%]"
          variants={childMotionVariants}
        >
          <WrapperMask>
            <Layout.Header variants={childMotionVariants} className="">
              Vivek Surya
            </Layout.Header>
          </WrapperMask>
          <WrapperMask>
            <Layout.Content variants={childMotionVariants}>
              <span>
                An accomplished Full Stack Software Developer, based in Pune,
                with a wealth of experience in the digital realm.
              </span>
            </Layout.Content>
            <Layout.Content variants={childMotionVariants}>
              <span>
                When I'm not coding, you'll find me exploring the great outdoors
                and embracing new culinary adventures
              </span>
            </Layout.Content>
          </WrapperMask>
        </Layout.ContentWrapper>
      </Layout.Section>
      <Layout.Section
        direction="right"
        className="items-center pt-20 lg:flex lg:pt-[10vh]"
      >
        <Layout.ContentWrapper className="" direction="right">
          {headerLinks.map((link, i) => (
            <HeaderLink key={i} {...link} />
          ))}
        </Layout.ContentWrapper>
      </Layout.Section>
    </Layout.Wrapper>
  );
};

export default () => withTransition(Home);
