import React from "react";
import Image from "next/image";
import Link from "next/link";
import style from "./footer.module.scss";
import { Container } from "react-bootstrap";
const Index = () => {
  return (
    <div className={style.footer_section}>
      <Container className={style.main_footer}>
        <Image alt="nav_logo" src="/icons/nav_logo.svg" width={256} height={69} />

        <ul className={style.footer_listSection}>
          <li className={style.footer_list}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className={style.footer_list}>
            <Link href="/">
              <a>Key Features</a>
            </Link>
          </li>
          <li className={style.footer_list}>
            <Link href="/">
              <a>Tokenomics</a>
            </Link>
          </li>
          <li className={style.footer_list}>
            <Link href="/">
              <a>Road Map</a>
            </Link>
          </li>
          <li className={style.footer_list}>
            <Link href="/">
              <a>join presale</a>
            </Link>
          </li>
          <li className={style.footer_list}>
            <Link href="/">
              <a>White Paper</a>
            </Link>
          </li>
        </ul>
        <Container className={style.footer_icons}>
          <Image alt="fb_logo" src="/icons/facebook.svg" width={24} height={24} />
          <Image alt="insta_logo" src="/icons/instagram.svg" width={24} height={24} />
          <Image alt="youtube_logo" src="/icons/youtube.svg" width={24} height={24} />
          <Image alt="twitter_logo" src="/icons/twitter.svg" width={24} height={24} />
          <Image alt="linkedin_logo" src="/icons/linkedin.svg" width={24} height={24} />
        </Container>
        <p className={style.footer_para}>© FINCRIP 2022 All rights reserved.</p>
      </Container>
    </div>
  );
};

export default Index;
