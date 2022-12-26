import React, { useEffect, useRef } from "react";
import styles from "../../styles/HomePageStyles/Contact.module.css";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import { useForm, ValidationError } from "@formspree/react";
gsap.registerPlugin(ScrollTrigger);

const Contact = ({ notify }) => {
  const [state, handleSubmit] = useForm(`${process.env.NEXT_PUBLIC_FORM}`);
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
  useEffect(() => {
    if (state.succeeded) {
      notify();
      document.getElementById("name").value = "";
      document.getElementById("number").vaule = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    }
  }, [state]);
  console.log(process.env.NEXT_PUBLIC_FORM);
  console.log(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORM}`);
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
        <form
          action={`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORM}`}
          method="post"
          onSubmit={handleSubmit}
        >
          <div className={styles.row}>
            <div className={styles.feild}>
              {/* <div className={styles.feildtitle}>Your name</div> */}
              <div className={styles.feildinput}>
                <input
                  placeholder="Your name"
                  type="text"
                  id="name"
                  name="name"
                />
              </div>
            </div>
            <div className={styles.feild}>
              {/* <div className={styles.feildtitle}>Your number</div> */}
              <div className={styles.feildinput}>
                <input
                  placeholder="Your number"
                  type="text"
                  id="number"
                  name="number"
                />
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.feild}>
              {/* <div className={styles.feildtitle}>Your email</div> */}
              <div className={styles.feildinput}>
                <input
                  placeholder="Your email"
                  autoComplete="on"
                  id="email"
                  type="email"
                  name="email"
                />
              </div>
            </div>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className={styles.row}>
            <div className={styles.messagefeild}>
              {/* <div className={styles.feildtitle}>Your Message</div> */}
              <div className={styles.messagefeildinput}>
                <textarea
                  placeholder="your Message"
                  id="message"
                  name="message"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className={styles.row2}>
            <button
              type="submit"
              disabled={state.submitting}
              className={styles.submitbtn}
            >
              <span>Just send</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
