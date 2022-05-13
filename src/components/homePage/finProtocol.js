import React from "react";
import Image from "next/image";
import style from "./style/finCrip.module.scss";
import { Container } from "react-bootstrap";

const FinProtocol = () => {
  return (
    <div className={style.finCrip_section}>
      <Container className={style.fincrip_main}>
        <div className={style.fincrip_content}>
          <h5 className={style.fincrip_heading}>Why Fincrip Protocol?</h5>
          <p className={style.fincrip_para}>
            Humans want to explore space but face a major challenge as
            commercial space travel has not commenced and will equally be
            competitive when it starts. The Fincrip Protocol is here to address
            this challenge. It empowers you to navigate a digital space, build
            digital assets, earn $FCP tokens, and mint NFTs for sale on the
            marketplace. All holders of the $FCP token can take part in the
            decision-making process governing the platform by exercising the
            voting power conferred on them by the token.
          </p>
        </div>
        <Container className={style.fincrip_cards}>
          <div className={style.finFrame_section}>
            <Image
              alt="fincrip_icon"
              src="/icons/fin_iconOne.svg"
              width={50}
              height={50}
            />
            <h5 className={style.finCard_heading}>Almost instant transfers</h5>
            <p className={style.finCard_para}>
              Transactions on Fincrip are finalized in a second and cost a
              fraction of a cent
            </p>
            <div className={style.card_border} />
          </div>
        </Container>
      </Container>
    </div>
  );
};

export default FinProtocol;
