import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./navbar.module.scss";
import {
  Button,
  Container,
  Nav,
  Navbar,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";

const Index = () => {
  const [colorChang, setColorChang] = useState(false);

  const ScrollDown = () => {
    if (window.scrollY >= 56) {
      setColorChang(true);
    } else {
      setColorChang(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", ScrollDown);
    }
  }, []);

  return (
    <>
      <Navbar
        expand="md"
        className={colorChang ? "navbar chang-color  " : "navbar not-color"}
      >
        <Container fluid>
          <img className="nav_logo" alt="nav_logo" src="/icons/nav_logo.svg" />
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse className="nav_linksBtn" id="navbarScroll">
            <Nav
              className="marg-nav"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="nav_Home" href="#main-section">
                Home
              </Nav.Link>
              <Nav.Link href="#key-feature">Key Features</Nav.Link>
              <Nav.Link href="#tokeno-mics">Tokenomics</Nav.Link>
              <Nav.Link href="#road-map">Road Map</Nav.Link>
              <Button className={styles.join_btn}>join presale</Button>
              <div className="flag_div">
                <img
                  className="flag_Img"
                  alt="nav_img"
                  src="/icons/Space_Flag.svg"
                />

                <DropdownButton
                  className={styles.dropdown_btn}
                  id="dropdown-basic-button"
                  title="language"
                >
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </DropdownButton>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Index;
