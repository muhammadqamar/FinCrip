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
            <h5>Q1 2022</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at
              odio non lectus accumsan pretium ut at erat.
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
            <h5>Q1 2022</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at
              odio non lectus accumsan pretium ut at erat.
            </p>
          </div>
        </div>
        <div className={`${style.box1} ${style.third}`}>
          <div className={style.box} />
          <div className={style.flexdiv}>
            <div className={style.flexdiv}>
              <h5>Q1 2022</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                at odio non lectus accumsan pretium ut at erat.
              </p>
            </div>
          </div>
        </div>
        <div className={`${style.box1} ${style.four}`}>
          <div className={style.box} />
          <div className={style.flexdiv}>
            <h5>Q1 2022</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at
              odio non lectus accumsan pretium ut at erat.
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default RoadMap;
