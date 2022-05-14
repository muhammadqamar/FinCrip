import React from "react";
import Image from "next/image";
import style from "./style/mainSection.module.scss";
import { Button, Container } from "react-bootstrap";

const MainSection = () => {
  return (
    <div className={style.universe_container}>
      <div className={style.main_universe}>
        <Container className={style.universe_section}>
          <div className={style.universeLeft_section}>
            <h5 className={style.universe_heading}>The wait is over.</h5>
            <h5 className={style.universe_innerHeading}>The wait is indeed over!</h5>
            <p className={style.universe_para}>
              Fincrip Protocol brings you an opportunity to explore the Fincrip universe, experience
              the space, create digital assets and connect with people while having the chance to
              enjoy a reward through $FCP tokens. The anticipated pre-sale is here. Join the moving
              train; sign up and get yourself a share of this golden opportunity today.
            </p>
            <Button className={`${style.universe_btn} ${style.whitePaper_btn}`}>Whitepaper</Button>
            <Button className={`${style.universe_btn} ${style.joinPresale_btn}`}>
              Join Presale &nbsp;
              <Image alt="arrow_Image" src="/icons/btn_arrow.svg" width={19.8} height={19.8} />
            </Button>
          </div>
          <img className={style.right_logo} alt="right_logo" src="/icons/finspace_logo.svg" />
        </Container>
      </div>
    </div>
  );
};

export default MainSection;
