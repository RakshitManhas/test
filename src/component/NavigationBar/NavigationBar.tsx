import { FunctionComponent, useState } from "react";
import logo from "/assets/Logo Kagi.png";
import menu from  "/assets/icons/menu-2Ham.png";
import styles from "./NavigationBar.module.css";
import { scrollToSection } from "./scroller";

export type NavigationBarType = {
  className?: string;
};

const NavigationBar: FunctionComponent<NavigationBarType> = ({ className = "" }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    scrollToSection(id, 70);
    setMobileMenuOpen(false); // Close the menu on link click
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    console.log(isMobileMenuOpen);
  };

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
      <div className={styles.navigationWrapper}>
        <div className={styles.hamburger} onClick={toggleMobileMenu}>
          {/* <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div> */}
          <img src={menu} alt="Menu" />
        </div>
        <div className={`${styles.navigationBar} ${isMobileMenuOpen ? styles.open : ''}`}>
          <div className={styles.homeParent}>
            <div className={styles.home}>
              <a className={styles.investorFeatures1} onClick={() => handleScroll('Services')}>Services</a>
            </div>
            <div className={styles.home}>
              <a className={styles.integrations1} onClick={() => handleScroll('Integrations')}>Integrations</a>
            </div>
            <div className={styles.appComingSoonWrapper}>
              <a className={styles.appComingSoon}>App Coming Soon</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
