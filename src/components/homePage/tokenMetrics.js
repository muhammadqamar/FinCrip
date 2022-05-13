import React from "react";

import styles from "./style/tokenMetrics.module.scss";

const token = [
  { img: "/icons/ticker.svg", name: "Token Ticker- $FCP" },
  { img: "/icons/supply.svg", name: "Total Supply - 100,000,000 FCP" },
  { img: "/icons/protocol.svg", name: "Protocol -Polygon" },
];
const barsToken = [
  { name: "Pre-sale", number: "20,000,000" },
  { name: "In-platform reward", number: "20,000,000" },
  { name: "Development", number: "10,000,000" },
  { name: "Staking", number: "10,000,000" },
  { name: "Music fund", number: "15,000,000" },
  { name: "Reserve fund", number: "5,000,000" },
  { name: "Marketing", number: "10,000,000" },
  { name: "Team", number: "10,000,000" },
];

const tokenMetrics = () => {
  return (
    <div className={styles.tokenMetrics}>
      <h6 className={styles.heading}>Token Metrics</h6>
      <div className={styles.tokens}>
        {token.map((item) => (
          <div key={item.key} className={styles.tooken_one}>
            <img className={styles.tooken_image} src={item.img} alt="logo" />
            <p className={styles.tooken_name}>{item.name}</p>
          </div>
        ))}
      </div>
      <div className={styles.bar_tokens}>
        {barsToken.map((item) => (
          <div key={item.key} className={styles.b_token}>
            <p className={styles.b_token_name}>{item.name}</p>
            <p className={styles.b_token_number}>{item.number}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default tokenMetrics;