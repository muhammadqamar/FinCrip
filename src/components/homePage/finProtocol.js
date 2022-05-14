import React from "react";
import Image from "next/image";
import style from "./style/finCrip.module.scss";
import { Container } from "react-bootstrap";

const finCard = [
  {
    img: "/icons/fin_iconOne.svg",
    heading: "Almost instant transfers",
    para: "Transactions on Fincrip are finalized in a second and cost a fraction of a cent",
  },
  {
    img: "/icons/fin_iconTwo.svg",
    heading: "Simply secure",
    para: "Fincrip validator nodes form a global, trustless and leaderless proof-of-stake network",
  },
  {
    img: "/icons/fin_iconThree.svg",
    heading: "Highly scalable",
    para: "Fincrip can process thousands of transactions per seconds and scales to thousands of nodes",
  },
  {
    img: "/icons/fin_iconFour.svg",
    heading: "Ethereum compatible",
    para: "Fincrip is EVM compatible, deploy and run your Ethereum dApps on Fincrip",
  },
];
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
          {finCard.map((item) => (
            <div className={style.finFrame_section}>
              <Image alt="fincrip_icon" src={item.img} width={50} height={50} />
              <h5 className={style.finCard_heading}>{item.heading}</h5>
              <p className={style.finCard_para}>{item.para}</p>
              <div className={style.card_border} />
            </div>
          ))}
        </Container>
      </Container>
    </div>
  );
};

export default FinProtocol;
