import { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import styles from "../../styles/HomePageStyles/About.module.css";
import HorizontalLine from "../HorizontalLine";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const About = () => {
  const myLine = useRef();
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [350, -150]);
  useEffect(() => {
    gsap.fromTo(
      "#sentence div",
      {
        y: 200,
        skewY: 7,
      },
      {
        duration: 1.8,
        ease: "power4.out",
        y: 0,
        skewY: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".sentence",
          toggleActions: "restart none none none",
          // end: "bottom 10%",
        },
      }
    );
  }, []);

  return (
    <section className={styles.main} id="what-we-do-container-section">
      <HorizontalLine Heading={"What we do?"} pageNo="1" />
      <div className={styles.row}>
        <div className={styles.bigtext}>
          <div className={styles.sentence} id="sentence">
            <div>We Are a Global</div>
          </div>
          <div className={styles.sentence} id="sentence">
            <div> Crypto Trading and</div>
          </div>
          <div className={styles.sentence} id="sentence">
            <div>Investment Firm,</div>
          </div>
          <div className={styles.sentence} id="sentence">
            <div> Driving Long and </div>
          </div>
          <div className={styles.sentence} id="sentence">
            <div> Short Term </div>
          </div>
          <div className={styles.sentence} id="sentence">
            <div> Sustainable Returns</div>
          </div>
        </div>
        <div className={styles.smalltext}>
          Stag Investments assists clients with multiple interactive services
          into the huge untapped market with a recipe to success. Our methods
          have been tried and tested by major expert analysts and investors,
          approving our successful formula with professional background
          credibility, We are here to ensure that your financial present and
          future are on the path to success.
        </div>
      </div>
      <motion.div className={styles.slidetext} style={{ x }}>
        Invest Better
      </motion.div>
    </section>
  );
};

export default About;
