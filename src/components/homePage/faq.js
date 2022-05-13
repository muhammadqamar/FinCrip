import React from "react";
import Accordion from "react-bootstrap/Accordion";
import style from "./style//faq.module.scss";

const Faq = () => {
  return (
    <div className={style.faq_main}>
      <h5 className={style.fag_heading}>FAQ</h5>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>On what blockchain network is Juranust token built?</Accordion.Header>
          <Accordion.Body>
            Donec commodo molestie est, id tincidunt nisl luctus eu. Ut vel laoreet dolor. Interdum
            et malesuada fames ac ante ipsum primis in faucibus. Sed sit amet turpis quam.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>On what blockchain network is Juranust token built?</Accordion.Header>
          <Accordion.Body>
            Donec commodo molestie est, id tincidunt nisl luctus eu. Ut vel laoreet dolor. Interdum
            et malesuada fames ac ante ipsum primis in faucibus. Sed sit amet turpis quam.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>On what blockchain network is Juranust token built?</Accordion.Header>
          <Accordion.Body>
            Donec commodo molestie est, id tincidunt nisl luctus eu. Ut vel laoreet dolor. Interdum
            et malesuada fames ac ante ipsum primis in faucibus. Sed sit amet turpis quam.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>On what blockchain network is Juranust token built?</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Faq;
