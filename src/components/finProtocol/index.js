import React from "react";
import Image from "next/image";
import style from "./navbar.module.scss";
import { Button, Container } from "react-bootstrap";

const FinCrip = () => {
  return (
    <Container className={style.fincrip_main}>
      <div className={style.fincrip_content}>
        <h5 className={style.finCrip_heading}>Why Fincrip Protocol?</h5>
        <p className={style.fincrip_para}>
          Humans want to explore space but face a major challenge as commercial
          space travel has not commenced and will equally be competitive when it
          starts. The Fincrip Protocol is here to address this challenge. It
          empowers you to navigate a digital space, build digital assets, earn
          $FCP tokens, and mint NFTs for sale on the marketplace. All holders of
          the $FCP token can take part in the decision-making process governing
          the platform by exercising the voting power conferred on them by the
          token.
        </p>
      </div>
      <div className={style.finFrame_section}></div>
    </Container>
  );
};

export default FinCrip;
