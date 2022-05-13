import React from "react";
import { Image } from "react-bootstrap";

import style from "./style//team.module.scss";

const card = [
  {
    img: "/icons/team_iconOne.svg",
    heading: "CEO",
    para: "As a serial entrepreneur working on the ideation and development with a vast experience in the development of blockchain projects. He is dedicated to developing strong business partnerships and investor management to scale the adoption of Blockchain applications globally.",
  },
  {
    img: "/icons/team_iconTwo.svg",
    heading: "Engineering Lead",
    para: "As a serial entrepreneur working on the ideation and development with a vast experience in the development of blockchain projects. He is dedicated to developing strong business partnerships and investor management to scale the adoption of Blockchain applications globally.",
  },
  {
    img: "/icons/team_iconThree.svg",
    heading: "Marketing Lead",
    para: "Brings more than 15 years of digital and social media marketing experience into Fincrip. Also has a bachelor’s degree in Marketing and a passion for storytelling to spotlight patterns within the blockchain industry.",
  },
  {
    img: "/icons/team_iconFour.svg",
    heading: "Operations Lead",
    para: "Strong knowledge of project and operations management. A goal-oriented leader that is interested in emerging technologies including blockchain, artificial intelligence, robotics and web3.",
  },
  {
    img: "/icons/team_iconFive.svg",
    heading: "Finance Lead",
    para: "A master’s degree in degree in Economics and Finance as well as over 13 years of financial expertise working with cross-functional external and internal clients to drive creative solutions in the Finance sector.",
  },
];

const Team = () => {
  return (
    <div className={style.team_main}>
      <div className={style.team_section}>
        <h5 className={style.team_heading}>Team</h5>
      </div>
      <div className={style.team_cards}>
        {card.map((item, index, count) => (
          <div key={count} className={index > 2 ? `${style.last_cards} ${style.card}` : style.card}>
            <Image
              className={style.card_img}
              alt="card_Image"
              src={item.img}
              width={120}
              height={120}
            />
            <h5 className={style.card_heading}>{item.heading}</h5>
            <p className={style.card_para}> {item.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
