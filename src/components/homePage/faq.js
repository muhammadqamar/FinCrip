import React from "react";
import style from "./style//faq.module.scss";

const Faq = () => {
  return (
    <div className={style.faq_main}>
      <div className={style.faq_section}>
        <h5 className={style.faq_heading}>Faq</h5>
        <div className={style.faq_content}>
          <h6 className={style.content_heading}>
            On what blockchain network is Juranust token built?
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Faq;
