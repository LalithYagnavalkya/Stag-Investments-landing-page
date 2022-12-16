import gsap from "gsap";
import { useEffect, useRef } from "react";
import styles from "../styles/Horizontal.module.css";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const HorizontalLine = ({ Heading, pageNo }) => {
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
          trigger: "",
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
          trigger: "sentence",
          toggleActions: "restart none none none",
          // end: "bottom 10%",
        },
      }
    );
  }, []);

  return (
    <div className={styles.container}>
      <hr ref={myLine} />
      <div className={styles.linecontent}>
        <span className={styles.pagename} id="line-subtext">
          {Heading}
        </span>
        <span className={styles.num} id="line-subtext">
          0{pageNo}
        </span>
        <span className={styles.num} id="line-subtext">
          /03
        </span>
      </div>
    </div>
  );
};

export default HorizontalLine;
