import { FunctionComponent } from "react";
import logo from "/assets/Logo Kagi.png";
import styles from "./NavigationBar.module.css";

export type NavigationBarType = {
  className?: string;
};

const NavigationBar: FunctionComponent<NavigationBarType> = ({ className = "" }) => {
  return (
    <div className={`${styles.rectangleGroup} ${className}`}>
      <div className={styles.logoKagiWrapper}>
        <img
          className={styles.logoKagiIcon}
          loading="lazy"
          alt="Kagi Logo"
          src={logo}
        />
      </div>
      <div className={styles.navigationBar}>
        <div className={styles.homeParent}>
          <div className={styles.home}>
            <a className={styles.home1}>Home</a>
          </div>
          <div className={styles.home}>
            <a className={styles.aboutUs1}>About Us</a>
          </div>
          <div className={styles.home}>
            <a className={styles.projectFeatures1}>Project Features</a>
          </div>
          <div className={styles.home}>
            <a className={styles.investorFeatures1}>Investor Features</a>
          </div>
          <div className={styles.home}>
            <a className={styles.integrations1}>Integrations</a>
          </div>
          <div className={styles.appComingSoonWrapper}>
            <a className={styles.appComingSoon}>App Coming Soon</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
