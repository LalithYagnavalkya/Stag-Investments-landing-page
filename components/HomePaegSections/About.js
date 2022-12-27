import { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import styles from "../../styles/HomePageStyles/About.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const About = () => {
  const myLine = useRef();
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [220, -150]);

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
          trigger: "#sentence",
          toggleActions: "restart none none none",
          // end: "bottom 10%",
        },
      }
    );
  }, []);

  //useEffect for horiline
  useEffect(() => {
    gsap.fromTo(
      myLine.current,
      { x: "-200%" },
      {
        x: 0,
        ease: "circ.easeIn",
        duration: 0.8,
        scrollTrigger: {
          trigger: "#what-we-do-container-section",
          toggleActions: "restart none none none",
          // end: "bottom 10%",
        },
      }
    );
    gsap.fromTo(
      "#line-subtext",
      { opacity: 0, y: 300 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: `#what-we-do-container-section`,
          toggleActions: "restart none none none",
          // end: "bottom 10%",
        },
      }
    );
  }, []);

  return (
    <section className={styles.main} id="what-we-do-container-section">
      {/* <HorizontalLine
        reftag={"what-we-do-container-section"}
        Heading={"What we do?"}
        pageNo="1"
      /> */}
      <div className="HoriContainer">
        <hr ref={myLine} />
        <div className="Horilinecontent">
          <span className="Horipagename" id="line-subtext">
            What We Do?
          </span>
          <span className="Horinum" id="line-subtext">
            01
          </span>
          <span className="Horinum" id="line-subtext">
            /04
          </span>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.bigtext}>
          <div className={styles.sentence} id="sentence">
            <div>We are an upcoming </div>
          </div>
          <div className={styles.sentence} id="sentence">
            <div> Investment Firm,</div>
          </div>
          <div className={styles.sentence} id="sentence">
            <div> Trying to help traders and</div>
          </div>
          <div className={styles.sentence} id="sentence">
            <div> investors find their edge</div>
          </div>
          <div className={styles.sentence} id="sentence">
            <div> in the Stock Market,</div>
          </div>
          <div className={styles.sentence} id="sentence">
            <div>we are constantly </div>
          </div>
          <div className={styles.sentence} id="sentence">
            <div>working on </div>
          </div>
          <div className={styles.sentence} id="sentence">
            <div>making investing easy </div>
          </div>
          <div className={styles.sentence} id="sentence">
            <div>for both existing</div>
          </div>
          <div className={styles.sentence} id="sentence">
            <div>and new investors/ traders,</div>
          </div>
        </div>
        <div className={styles.smalltext}>
          Stag Investments assists clients with multiple interactive services
          into the huge untapped market with a recipe to success. Our methods
          have been tried and back tested by major expert analysts and
          investors, approving our successful formula with professional
          background credibility, We are here to ensure that your financial
          present and future are on the path towards success.
        </div>
      </div>
      <motion.div className={styles.slidetext} style={{ x }}>
        Invest Better
      </motion.div>
    </section>
  );
};

export default About;
