import React from "react";
import Accordion from "react-bootstrap/Accordion";
import style from "./style//faq.module.scss";

const Faq = () => {
  return (
    <div className={style.faq_main}>
      <h5 className={style.fag_heading}>FAQ</h5>
      <Accordion defaultActiveKey="1">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            On what blockchain network is FINCRIP token built?
          </Accordion.Header>
          <Accordion.Body>Polygon</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Where can I buy $FCP Token?</Accordion.Header>
          <Accordion.Body>On Pancakeswap and Quickswap</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>What is gas fee?</Accordion.Header>
          <Accordion.Body>
            A gas fee is something all users must pay in order to perform any
            function on the FINCRIP Protocol.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>What is NFTs</Accordion.Header>
          <Accordion.Body>
            NFTs are unique cryptographic tokens that exist on a blockchain and
            cannot be replicated
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            How much liquidity must be locked?
          </Accordion.Header>
          <Accordion.Body>
            There is NO minimum liquidity requirement
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            Why you should invest in FINCRIP PROTOCOL?
          </Accordion.Header>
          <Accordion.Body>
            Safety-Liquidity - Contract Audited -Community Driven -Utilities
            -NFT Marketplace -Play to Earn Game potential -Staking Rewards
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Faq;
