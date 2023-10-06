import Heading from "@components/headings";
import { Link } from "wouter";

type Props = {
  title: string;
  href: string;
};

const HeaderLink = ({ title, href }: Props) => {
  return (
    <Heading.Wrapper className="cursor-pointer text-6xl tracking-widest md:text-[11vw] lg:text-heading">
      <div className="group transition-all hover:translate-x-10">
        <Link href={href}>{title}</Link>
      </div>
    </Heading.Wrapper>
  );
};

export default HeaderLink;
