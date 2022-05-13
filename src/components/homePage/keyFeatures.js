import React from "react";
import style from "./style/keyFeatures.module.scss";
import { Container } from "react-bootstrap";

const KeyFeatures = () => {
  return (
    <Container className={style.feature_section}>
      <h5 className={style.feature_heading}>Key Features</h5>
      <div className={style.feature_cards}>
        <div className={style.feature_card}>
          <h6 className={style.card_heading}>Build</h6>
          <p className={style.card_para}>
            Build your own rarest and most fantastic futuristic spaceships, equipment and items from
            the universe. This feature empowers you to put your creativity into action.
          </p>
        </div>
      </div>
      <div className={`${style.feature_card}${style.feature_lastcard}`}></div>
    </Container>
  );
};

export default KeyFeatures;
