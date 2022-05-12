import React from "react";
import Image from "next/image";
import { Container } from "react-bootstrap";
const Footer = () => {
  return (
    <Container>
      <Image
        className="nav_logo"
        alt="nav_logo"
        src="/icons/nav_logo.svg"
        width={256}
        height={69}
      />
    </Container>
  );
};

export default Footer;
