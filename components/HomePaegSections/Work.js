import gsap from "gsap";
import { useEffect, useRef } from "react";
import styles from "../../styles/Work.module.css";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Work = () => {
  //line animations
  const myLine = useRef();
  useEffect(() => {
    gsap.fromTo(
      myLine.current,
      { x: "-200%" },
      {
        x: 0,
        ease: "circ.easeIn",
        duration: 0.8,
        scrollTrigger: {
          trigger: "#Work-section",
          toggleActions: "restart none none none",
          // end: "bottom 10%",
        },
      }
    );
    gsap.fromTo(
      "#work-line-subtext",
      { opacity: 0, y: 300 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: `#Work-section`,
          toggleActions: "restart none none none",
          // end: "bottom 10%",
        },
      }
    );
  }, []);

  //for text animatins
  useEffect(() => {
    gsap.fromTo(
      "#work-sentence div",
      {
        y: 200,
        skewY: 7,
      },
      {
        duration: 1.8,
        ease: "power4.out",
        y: 0,
        skewY: 0,
        delay: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: "#Work-section",
          toggleActions: "restart none none none",
          // end: "bottom 10%",
        },
      }
    );
  }, []);
  return (
    <div className={styles.main} id="Work-section">
      <div className="HoriContainer">
        <hr ref={myLine} />
        <div className="Horilinecontent">
          <span className="Horipagename" id="work-line-subtext">
            Location
          </span>
          <span className="Horinum" id="work-line-subtext">
            {/* 0{pageNo} */}
            02
          </span>
          <span className="Horinum" id="work-line-subtext">
            /03
          </span>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.heading}>
          <div className={styles.sentence} id="work-sentence">
            <div> Trade alongside with us</div>
          </div>
          <div className={styles.sentence} id="work-sentence">
            <div>to, learn New strategies and</div>
          </div>
          <div className={styles.sentence} id="work-sentence">
            <div> to gain some Profits!</div>
          </div>
          <div className={styles.price}>120₹/ day</div>
        </div>
        <div className={styles.desc}>
          We trade Monday - Friday in café Avail and your are welcome to join us
          during market trading sessions. and invest in best stocks along with
          us. Trading classes are also available contact us to know more.
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.heading2}>
          <div className={styles.sentence} id="work-sentence">
            <div> Tired of work from home? </div>
          </div>
          <div className={styles.sentence} id="work-sentence">
            <div> Just come to cafe and</div>
          </div>
          <div className={styles.sentence} id="work-sentence">
            <div> use it as a workplace.</div>
          </div>
          <div className={styles.sentence} id="work-sentence">
            <div> Maintain work life balance.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
