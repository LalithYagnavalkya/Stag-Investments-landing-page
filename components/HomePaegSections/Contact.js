import React, { useEffect, useRef } from "react";
import styles from "../../styles/HomePageStyles/Contact.module.css";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);
const Contact = () => {
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
          trigger: "#contact-section",
          toggleActions: "restart none none none",
          // end: "bottom 10%",
        },
      }
    );
    gsap.fromTo(
      "#contact-line-subtext",
      { opacity: 0, y: 300 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: `#contact-section`,
          toggleActions: "restart none none none",
          // end: "bottom 10%",
        },
      }
    );
  }, []);

  return (
    <div className={styles.main} id="contact-section">
      <div className="HoriContainer">
        <hr ref={myLine} />
        <div className="Horilinecontent">
          <span className="Horipagename" id="contact-line-subtext">
            Contact us
          </span>
          <span className="Horinum" id="contact-line-subtext">
            {/* 0{pageNo} */}
            04
          </span>
          <span className="Horinum" id="contact-line-subtext">
            /04
          </span>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.heading}>Get in Touch</div>
        <div className={styles.row}>
          <div className={styles.feild}>
            <div className={styles.feildtitle}>Your name</div>
            <div className={styles.feildinput}>
              <input type="text" />
            </div>
          </div>
          <div className={styles.feild}>
            <div className={styles.feildtitle}>Your number</div>
            <div className={styles.feildinput}>
              <input type="text" />
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.feild}>
            <div className={styles.feildtitle}>Your email</div>
            <div className={styles.feildinput}>
              <input type="text" />
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.messagefeild}>
            <div className={styles.feildtitle}>Your Message</div>
            <div className={styles.messagefeildinput}>
              <textarea type="text" />
            </div>
          </div>
        </div>
        <div className={styles.row2}>
          <div className={styles.submitbtn}>
            <span>Just send</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
