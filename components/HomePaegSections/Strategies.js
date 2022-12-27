import { ArcElement, Chart, Legend, Tooltip } from "chart.js";
import { useEffect, useRef, useState } from "react";
import { Pie } from "react-chartjs-2";
import styles from "../../styles/HomePageStyles/Strategies.module.css";
import gsap from "gsap";
import { useInView } from "react-intersection-observer";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
Chart.register(ArcElement, Tooltip, Legend);

const Strategies = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  //for text animatins
  useEffect(() => {
    gsap.fromTo(
      "#strategie-sentence div",
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
          trigger: "#strategie-sentence",
          toggleActions: "restart none none none",
          // end: "bottom 10%",
        },
      }
    );
  }, []);

  //for horizontal line animations
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
          trigger: "#strategies-section",
          toggleActions: "restart none none none",
          // end: "bottom 10%",
        },
      }
    );
    gsap.fromTo(
      "#stra-line-subtext",
      { opacity: 0, y: 300 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: `#strategies-section`,
          toggleActions: "restart none none none",
          // end: "bottom 10%",
        },
      }
    );
  }, []);

  //pie chart data
  const data = {
    labels: ["Options", "Equity", "Commodities", "Penny Stocks"],
    datasets: [
      {
        data: [20, 40, 20, 20],
        backgroundColor: ["#A555EC", "#A5F1E9", "#E97777", "#2192FF"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };
  const options = {
    plugins: {
      deferred: {
        xOffset: 150, // defer until 150px of the canvas width are inside the viewport
        yOffset: "50%", // defer until 50% of the canvas height are inside the viewport
        delay: 500, // delay of 500 ms after the canvas is considered inside the viewport
      },
      legend: {
        labels: {
          position: "left",
          padding: 20,
          color: "white",
          labels: {
            fontSize: 120,
          },
        },
      },
    },
    // autoPadding: true,
    // responsive: true,
    // maintainAspectRatio: true,
  };

  return (
    <div
      className={styles.main}
      id="strategies-section"
      reftag={"strategies-section"}
    >
      <div className="HoriContainer">
        <hr ref={myLine} />
        <div className="Horilinecontent">
          <span className="Horipagename" id="stra-line-subtext">
            About Our Strategies
          </span>
          <span className="Horinum" id="stra-line-subtext">
            {/* 0{pageNo} */}
            02
          </span>
          <span className="Horinum" id="stra-line-subtext">
            /04
          </span>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.heading}>
            <div className={styles.sentence} id="strategie-sentence">
              <div>How we handle your</div>
            </div>
            <div className={styles.sentence} id="strategie-sentence">
              <div>Funds?</div>
            </div>
          </div>
          <div className={styles.desc}>
            your funds will be invested in these 4 segments
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.piedesktop} ref={ref}>
            {inView && (
              <Pie data={data} options={options} width={550} height={550} />
            )}
          </div>

          <div className={styles.phone}>
            <Pie data={data} options={options} width={400} height={400} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strategies;
