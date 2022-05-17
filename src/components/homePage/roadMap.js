import React from "react";
import { Image } from "react-bootstrap";
import style from "./style/roadMap.module.scss";

const RoadMap = () => {
  return (
    <div id="road-map" className={style.roadMap_main}>
      <div className={style.roadMap_section}>
        <img src="/croppedline.png" alt="" className={style.liner} />
        <img src="/Vector.png" alt="" className={style.liner2} />

        <h5 className={style.roadMap_heading}>Road Map</h5>
        <div className={`${style.box1} ${style.first}`}>
          <div className={style.box} />
          <div className={style.flexdiv}>
            <h5>Q2,2022</h5>
            <p>
              Pre-sale - Financing with ICOs and investors -Promote ICOs on
              major social media platform - Airdrops - Bounties
            </p>
          </div>
        </div>
        <div className={style.rocket}>
          <div className={style.box} />
          <img src="./Rocket.png" alt="" />
          <img src="./rs.png" alt="" className={style.mobiler} />

          <h6>WE ARE HERE!</h6>
        </div>
        <div className={`${style.box1} ${style.second}`}>
          <div className={style.box} />
          <div className={style.flexdiv}>
            <h5>Q3, 2022</h5>
            <p>
              On going promotion - Continue financing with ICOs and investors -
              More ICO promotions on major social media platform - AMA
            </p>
          </div>
        </div>
        <div className={`${style.box1} ${style.third}`}>
          <div className={style.box} />
          <div className={style.flexdiv}>
            <div className={style.flexdiv}>
              <h5>Q4, 2022</h5>
              <p>
                Website developmnt - Web app development - Intense marketing on
                socail media platforms
              </p>
            </div>
          </div>
        </div>
        <div className={`${style.box1} ${style.four}`}>
          <div className={style.box} />
          <div className={style.flexdiv}>
            <h5>Q1, 2023</h5>
            <p>
              Mobile app version(Android & IOS) - NASA Collaboration - Full
              gaming launch
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default RoadMap;
