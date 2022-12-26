import gsap from "gsap";
import { useEffect } from "react";
import styles from "../../styles/HomePageStyles/Risk.module.css";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Risk = () => {
  //for text animatins
  useEffect(() => {
    gsap.fromTo(
      "#risk-heading-sentennce div",
      {
        y: 200,
        skewY: 7,
      },
      {
        duration: 1.8,
        ease: "power4.out",
        y: 0,
        skewY: 0,
        delay: 0.22,
        stagger: 0.1,
        scrollTrigger: {
          trigger: "#risk-heading-sentennce",
          toggleActions: "restart none none none",
          // end: "bottom 10%",
        },
      }
    );
  }, []);
  return (
    <div className={styles.main}>
      <div className={styles.row}>
        <div className={styles.videocontainer}>
          <video
            src="/videos/books.mp4"
            autoPlay
            loop
            muted
            resizemode="cover"
            repeat={"true"}
            playwheninactive={"true"}
          />
        </div>
        <div className={styles.content}>
          <div className={styles.contentheading}>Risk Disclousre</div>
          <div className={styles.desc}>
            Trading involves substantial risk and is not for every investor.
            Risk capital is money that can be lost without jeopardizing ones’
            financial security or lifestyle. Only risk capital should be used
            for trading and only those with sufficient risk capital should
            consider trading. We at Stag Investment offer general trading advice
            that does not take into consideration your own trading experiences,
            personal objectives and goals, financial means, or risk tolerance.
            Past performance is not necessarily indicative of future results.
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.content}>
          <div className={styles.contentheading2}>
            <div className={styles.sentence} id="risk-heading-sentennce">
              <div>We are looking for Experienced Analysts </div>
            </div>
            <div className={styles.sentence} id="risk-heading-sentennce">
              <div> and account handlers</div>
            </div>
            <div className={styles.sentence} id="risk-heading-sentennce">
              <div> who are willing to learn and earn</div>
            </div>
            <div className={styles.sentence} id="risk-heading-sentennce">
              <div>at the same time while</div>
            </div>
            <div className={styles.sentence} id="risk-heading-sentennce">
              <div> following our companies guidelines.</div>
            </div>
          </div>
        </div>
        <div className={styles.videocontainer2}>
          <video
            src="/videos/tree.mp4"
            autoPlay
            loop
            muted
            resizemode="cover"
            repeat={"true"}
            playwheninactive={"true"}
          />
        </div>
      </div>
    </div>
  );
};

export default Risk;
