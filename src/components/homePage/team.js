import React from "react";
import { Image } from "react-bootstrap";
import style from "./style//team.module.scss";

const Team = () => {
  return (
    <div className={style.team_main}>
      <div className={style.team_section}>
        <h5 className={style.team_heading}>Team</h5>
      </div>
      <div className={style.team_cards}>
        <div className={style.card}>
          <Image
            className={style.card_img}
            alt="card_Image"
            src="/icons/team_iconOne.svg"
            width={120}
            height={120}
          />
          <h5 className={style.card_heading}>CEO</h5>
          <p className={style.card_para}>
            As a serial entrepreneur working on the ideation and development
            with a vast experience in the development of blockchain projects. He
            is dedicated to developing strong business partnerships and investor
            management to scale the adoption of Blockchain applications
            globally.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
