import React from "react";

import styles from "./style/overVision.module.scss";

const OverVision = () => {
  return (
    <div className={styles.overVision_container}>
      <div className={styles.overVision}>
        <div className={styles.image_box}>
          <img src="/icons/vison.svg" alt="vison" />
        </div>
        <div className={styles.about_box}>
          <h5 className={styles.about_head}>OUR VISION</h5>
          <p className={styles.para}>
            Our vision is to provide the average person with a platform that allows them to create a
            world of their own and construct a virtual spacecraft that can be rented out to other
            people who are interested in exploring their part of the virtual world. We seek to
            realize this vision by bringing a gradual end to the barriers of space by eliminating
            the high costs of space travel and finding more use cases within space exploration. This
            way, Fincrip Protocol will be creating a new model for space tourism.
          </p>
        </div>
      </div>
      <div className={styles.bottom_content}>
        <h5 className={styles.cont_heading}>Fincrip Protocol Token Economy</h5>
        <p className={styles.cont_para}>
          The Fincrip protocol will be utilized by a variety of parties with varying objectives.
        </p>
      </div>
    </div>
  );
};

export default OverVision;
