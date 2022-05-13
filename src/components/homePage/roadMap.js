import React from "react";
import { Image } from "react-bootstrap";
import style from "./style//roadMap.module.scss";

const RoadMap = () => {
  return (
    <div className={style.roadMap_main}>
      <div className={style.roadMap_section}>
        <h5 className={style.roadMap_heading}>Road Map</h5>
        <Image
          className={style.roadMap_Image}
          alt="roadMap_Image"
          src="/icons/teamLine.svg"
          width={1440}
          height={0}
        />
      </div>
      <div></div>
    </div>
  );
};

export default RoadMap;
