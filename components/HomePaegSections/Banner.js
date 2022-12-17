import React from "react";
import styles from "../../styles/HomePageStyles/Banner.module.css";
// import { ReactComponent as RightArrow } from "../../assests/arrow-right.svg";
const Banner = ({ headlines, myBackground }) => {
  return (
    <div className={styles.main}>
      <div className={styles.heading}>
        <div className={styles.line} id="line">
          <div ref={headlines}>Sit back and relax, while we make</div>
        </div>
        <div className={styles.line} id="line">
          <div ref={headlines}>profits for you</div>
        </div>
      </div>
      <>
        <div
          className={styles.mybackgroundimagecover}
          id="background-cover"
        ></div>
        <div className={styles.mybackgroundimage} id="my-background-image">
          <img
            className={styles.investimg}
            src="/images/bullstocks.webp"
            alt="stock market"
          />
        </div>
      </>

      <div className={styles.btnrow} id="lookatprice">
        <span>
          Look at our pricing
          <img src="/icons/arrow-right.svg" alt="stag investments pricing" />
        </span>
        {/* <RightArrow /> */}
      </div>
    </div>
  );
};

export default Banner;
