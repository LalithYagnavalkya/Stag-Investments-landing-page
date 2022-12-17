import React from "react";
import styles from "../../styles/HomePageStyles/Pricing.module.css";
const prices = [
  {
    name: "6 months",
    perks: [
      "Added to three premium private groups where we provide Trade calls",
      "10% to 15% returns every month",
      "Professional support 24x7",
      "for below 1 lakh investments",
    ],
    price: "15%",
    valid: "1 month",
    duriation: "valid for 6 months",
  },
  {
    name: "1 Year",
    perks: [
      "Added to three premium private groups where we provide Trade calls",
      "Double your investment in 1 month",
      "50% profits return after 1 month",
      "45 days money back policy",
      "for above 1 lakh investments",
    ],
    price: "50%",
    valid: "1 month",

    duriation: "valid for year",
  },
];
const Pricing = ({ togglePricingPage }) => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <span onClick={() => togglePricingPage(false)}>
          <img src="/icons/arrow-left.svg" alt="" />
        </span>
      </div>
      <div className={styles.container}>
        <div className={styles.pricingshow}>
          <div className={styles.pricingshowtitle}>
            Earn more
            <br />
            <span>with Goodplans</span>
          </div>
          <div className={styles.pricingshowdesc}>
            Choose a plan according to your budget and get onboard in minutes.
            <span>
              <img src="/icons/arrow-right.svg" alt="" srcset="" />
            </span>
          </div>
          <div className={styles.priceshowlogo}>
            <img src="/logo.svg" alt="" srcset="" />
          </div>
        </div>

        {prices.map((item) => {
          return (
            <>
              <div className={styles.pricecard}>
                <div className={styles.top}>
                  <div className={styles.title}>
                    <img src="icons/logo-white.svg" alt="" />
                    <span>{item.name}</span>
                  </div>
                  <div className={styles.desc}>
                    <span className={styles.subtitle}>What You'll Get</span>
                    {item.perks.map((perks) => {
                      return (
                        <>
                          <span className={styles.point}>
                            <img src="icons/tick.svg" alt="" />
                            <span>{perks}</span>
                          </span>
                        </>
                      );
                    })}
                  </div>
                </div>

                <div className={styles.amountsection}>
                  <div className={styles.amount}>
                    <span>{item.price}</span> returns/{item.valid}
                  </div>
                  <div className={styles.pricingbtn}>choose</div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
