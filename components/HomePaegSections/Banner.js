import Link from "next/link";
import React from "react";
import styles from "../../styles/HomePageStyles/Banner.module.css";
// import { ReactComponent as RightArrow } from "../../assests/arrow-right.svg";
const Banner = ({ headlines, togglePricingPage }) => {
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
          Register with us
          <Link
            className="contact-btn"
            href="#pricingpagesection"
            scroll={false}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <img
              src="/icons/arrow-right.svg"
              alt="stag investments pricing"
              onClick={() => togglePricingPage(true)}
            />
          </Link>
        </span>
        {/* <RightArrow /> */}
      </div>
    </div>
  );
};

export default Banner;
