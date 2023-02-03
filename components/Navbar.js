import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = ({ togglePricingPage }) => {
  const [isNav, toggleNav] = useState(false);

  return (
    <div className={styles.navbar} id="header">
      <div className={styles.logo}>
        <div className={styles.logostagborder}>
          <img src="/logo.svg" alt="" />
        </div>
        <span>Stag Investments.</span>
      </div>
      <div className={styles.navphone} onClick={() => toggleNav(!isNav)}>
        <span></span>
        <span></span>
      </div>
      {isNav && (
        <div className={styles.navSetting}>
          <div className="nav-peak"></div>
          <>
            {/* <div className="nav-setting-header">back</div> */}
            <div className={styles.navSettingItems}>
              <Link
                className="contact-btn"
                href="#what-we-do-container-section"
                scroll={false}
              >
                <span
                  onClick={() => {
                    toggleNav(false);
                  }}
                  className="contact-btn"
                >
                  About
                </span>
              </Link>
//               <Link
//                 className="contact-btn"
//                 href="#pricingpagesection"
//                 spy={true}
//                 smooth={true}
//                 offset={-100}
//                 duration={500}
//                 scroll={false}
//               >
//                 <span
//                   onClick={() => {
//                     // togglePricingPage(true);
//                     toggleNav(false);
//                   }}
//                 >
//                   pricing
//                 </span>
//               </Link>
              <Link
                href="#contact-section"
                className="contact-btn"
                //   to="contact-section-page"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <span onClick={() => toggleNav(false)}>contact us</span>
              </Link>
            </div>
          </>
        </div>
      )}
      <div className={styles.navlinks}>
        <Link
          className="contact-btn"
          href="#what-we-do-container-section"
          //   to="what-we-do-container-section"
          spy={true}
          smooth={true}
          scroll={true}
          // offset={-100}
          duration={500}
        >
          <span className="contact-btn">About</span>
        </Link>
        <Link
          href="#contact-section"
          className="contact-btn"
          //   to="contact-section-page"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <span>Contact us</span>
        </Link>
//         <Link
//           className="contact-btn"
//           href="#pricingpagesection"
//           spy={true}
//           smooth={true}
//           offset={-100}
//           duration={500}
//           scroll={false}
//         >
//           <div
//             className={styles.pricingbtn}
//             onClick={() => togglePricingPage(true)}
//           >
//             <span>Pricing</span>
//           </div>
//         </Link>
      </div>
    </div>
  );
};

export default Navbar;
