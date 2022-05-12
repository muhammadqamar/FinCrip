import React from "react";
import Image from "next/image";
import styles from "./navbar.module.scss";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

const Index = () => {
  return (
    <>
      <Navbar expand="lg">
        <Container fluid>
          <Image
            className="nav_logo"
            alt="nav_logo"
            src="/icons/nav_logo.svg"
            width={256}
            height={69}
          />
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse className="nav_linksBtn" id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link className="nav_Home" href="#action1">
                Home
              </Nav.Link>
              <Nav.Link href="#action2">Key Features</Nav.Link>
              <Nav.Link href="#action2">Tokenomics</Nav.Link>
              <Nav.Link href="#action2">Road Map</Nav.Link>
              <Button className={styles.join_btn}>join presale</Button>
              <Image alt="nav_img" src="/icons/Space_Flag.svg" width={26} height={26} />
              <Nav.Link className="lang_link" href="#action2">
                langues
              </Nav.Link>
              <Image alt="nav_img" src="/icons/nav_arrow.svg" width={11} height={5} />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Index;
