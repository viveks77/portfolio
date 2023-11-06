import { links } from "@helpers/contants";
import GithubIcon from "@assets/github-mark.svg";
import LinkdnIcon from "@assets/linkdn.svg";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { contactDetails } from "@helpers/data-dump";

const Navbar = () => {
  return (
    <motion.nav className="fixed h-full px-1 py-16 lg:min-w-[6%]">
      <div className="flex h-full flex-col items-center justify-between">
        <div className="navlink flex items-center justify-around gap-5 font-Poppins font-light uppercase">
          {links.map(
            ({ title, href }: { title: string; href: string }, i: number) => (
              <Link
                className="group relative hidden rotate-180 py-1 tracking-wider lg:block"
                key={i}
                href={href}
              >
                {title}
                <div className="absolute left-1/2 top-0 h-0 w-[1px] origin-center bg-black transition-all group-hover:h-full"></div>
              </Link>
            ),
          )}
          <Link
            className="group relative block rotate-180 py-1 tracking-wider lg:hidden"
            href="/"
          >
            Home
            <div className="absolute left-1/2 top-0 h-0 w-[1px] origin-center bg-black transition-all group-hover:h-full"></div>
          </Link>
          <div className="h-24 w-0.5 bg-foreground opacity-60"></div>
        </div>
        <div className="hidden flex-col items-center justify-end gap-6 lg:flex">
          <a href={contactDetails.linkdin} target="_blank" className="group">
            <img
              className="h-8 w-8 transition-all duration-700 group-hover:scale-[1.1]"
              src={LinkdnIcon}
              loading="eager"
              title="Linkedin"
              alt="linkd"
            />
          </a>
          <a href={contactDetails.github} target="_blank" className="group">
            <img
              className="h-6 w-6 transition-all duration-700 group-hover:scale-[1.1]"
              src={GithubIcon}
              loading="eager"
              title="Github"
              alt="github"
            />
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
