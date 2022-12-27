import gsap, { Power2 } from "gsap";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  About,
  Banner,
  Contact,
  IntroOverlay,
  Location,
  Pricing,
  Risk,
  Sebi,
  Social,
  Strategies,
  Work,
} from "../components/HomePaegSections";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [isPricingPageOpen, togglePricingPage] = useState(false);
  const notify = () => toast.success("Mail sent!");

  useEffect(() => {
    const tl = gsap.timeline();
    gsap.to("body", { css: { visibility: "visible" }, duration: 0 });
    // gsap.to("#header", { css: { visibility: "hidden" }, duration: 0 });
    gsap.to("#header", { y: -300, duration: 0 });
    gsap.to("#header", { y: -300, duration: 0 });
    gsap.to("#lookatprice span", { y: 300, duration: 0 });
    tl.fromTo(
      "#line div",
      {
        y: 200,

        skewY: 7,
      },
      {
        duration: 1.8,
        ease: "power4.out",
        delay: 1,
        y: 0,
        skewY: 0,
        stagger: 0.3,
      }
    )
      .to("#overlay-top", {
        height: 0,
        ease: "expo.inOut",
        duration: 1.3,
        stagger: 0.3,
      })
      .to("#my-background-image", {
        css: { visibility: "visible" },
        duration: 0,
      })
      .to("#background-cover", {
        duration: 1.2,
        delay: 0,
        width: "0vw",
        // scaleX: 0,
        ease: Power2.easeInOut,
      })
      .to("#lookatprice span", { y: 0, duration: 0 })
      .fromTo(
        "#my-background-image img",
        {
          scale: 1.4,
        },
        {
          scale: 1,
          delay: -1.4,
          duration: 1.2,
          ease: "expo.inOut",
        }
      )
      .to("#header", { y: 0, duration: 1.3, delay: -1.8 })
      .fromTo(
        "#socialicons",
        { x: 200, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.3, delay: -1.5, stagger: 1 }
      )
      .to("#overlay", {
        css: { display: "none" },
      });
  }, []);

  return (
    <div className={styles.app}>
      <Head>
        <title>Stag Investments</title>
        <meta
          name="description"
          content="stag investments is a trading comapnay"
        />
        <meta
          name="google-site-verification"
          content="2iPgzwPuC8VGeftMGa67ySHKZ26E81ZJ0ctuDKl1R5g"
        />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Navbar togglePricingPage={togglePricingPage} />
      <IntroOverlay />
      <Banner togglePricingPage={togglePricingPage} />
      <About />
      <Strategies />
      <Risk />
      <Work />
      <Location />
      <Pricing togglePricingPage={togglePricingPage} />
      <Contact notify={notify} />
      <Sebi />
      <ToastContainer position="bottom-right" theme="colored" />
      <Social />
    </div>
  );
}
