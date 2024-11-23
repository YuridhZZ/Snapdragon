import React from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import Logo from "./Logo";
import Link from "next/link";



const Footer = () => {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <div className="flex lg:justify-end">
          </div>
        </div>
        <div className="mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <Link href={"/"} aria-label="Home">
            <Logo className="h-8" fillOnHover>
              SnapdragonXUPB
            </Logo>
          </Link>
        </div>
      </FadeIn>
    </Container>
  );
};

export default Footer;
