import styles from "../../styles/HomePageStyles/IntroOverlay.module.css";
const IntroOverlay = () => {
  return (
    <>
      <div className={styles.introOverlay} id="overlay">
        <div className={styles.top}>
          <div className={styles.overlaytop} id="overlay-top"></div>
          <div className={styles.overlaytop} id="overlay-top"></div>
          <div className={styles.overlaytop} id="overlay-top"></div>
        </div>
      </div>
    </>
  );
};

export default IntroOverlay;
