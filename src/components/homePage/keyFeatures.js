import React from "react";
import style from "./style/keyFeatures.module.scss";
import { Container } from "react-bootstrap";

const card = [
  {
    heading: "Build",
    para: "Build your own rarest and most fantastic futuristic spaceships, equipment and items from the universe. This feature empowers you to put your creativity into action.",
  },
  {
    heading: "Conquer",
    para: "There is so much to explore and experience. Fincrip is the perfect platform for you to travel to the stars, discover new worlds and enjoy the promise of the space economy.",
  },
  {
    heading: "Earn",
    para: "Earn $FCP by producing and buying futuristic items such as spacecraft, hologram and personal assistant robots, then sell them on the marketplace for profit.",
  },
  {
    heading: "Govern",
    para: "Take part in the governance system of the Fincrip protocol. The amount of $FCP tokens you own determines the power of your votes. That is, the higher your $FCP tokens, the more powerful you become in Fincrip’s governance system.",
  },
  {
    heading: "Connect",
    para: "Fincrip protocol is not just a platform for you to build, explore or earn but also a platform for you to connect with people of like minds in the community. That is, you can make relationships that will last a lifetime through the Fincrip protocol universe.",
  },
];

const KeyFeatures = () => {
  return (
    <div className={style.feature_section}>
      <h5 className={style.feature_heading}>Key Features</h5>

      <div className={style.feature_cards}>
        {card.map((item, index, count) => (
          <div
            key={count}
            className={
              index === 4 ? `${style.last_card} ${style.feature_card}` : style.feature_card
            }
          >
            <h6 className={style.card_heading}>{item.heading}</h6>
            <p className={style.card_para}>{item.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyFeatures;
