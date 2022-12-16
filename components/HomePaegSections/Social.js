import styles from "../../styles/HomePageStyles/Social.module.css";
const Social = () => {
  return (
    <div className={styles.socialicons} id="socialicons">
      <a target="_blank" href="https://www.instagram.com/stag_investments/">
        <img src="/icons/insta.svg" alt="" />
      </a>
      <a target="_blank" href="https://discord.com/invite/8HZFFXSRWp">
        <img src="/icons/discord.svg" alt="" />
      </a>
      <a
        target="_blank"
        href="https://www.facebook.com/people/The-Krypto-Knight/100069484327008/"
      >
        <img src="/icons/facebook.svg" alt="" />
      </a>
    </div>
  );
};

export default Social;
