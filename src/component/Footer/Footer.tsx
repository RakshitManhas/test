import { FunctionComponent } from "react";
import logo from "/assets/Logo Kagi.png";
import lock from "/assets/icons/group-2.svg";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

export type Footer = {
  className?: string;
};

const Footer: FunctionComponent<Footer> = ({ className = "" }) => {
  return (
    <section className={`${styles.websiteLayoutChild} ${className}`}>
      <div className={styles.frameParent2}>
        {/* <div className={styles.rectangleParent3}>
          <div className={styles.lockCallToAction}>
            <h1 className={styles.wantToLock}>Want to Lock your tokens?</h1>
            <div className={styles.kagiAllowsCompanies}>
              Kagi allows companies to create, vest, lock, track, and spin up
              staking pools for their tokens.
            </div>
          </div>
          <img className={styles.lock} alt="Lock" src={lock} />
        </div> */}
        <div className={styles.logoContentWrapper}>
          <div className={styles.logoContent}>
            <img
              className={styles.kagiLogoIcon}
              loading="lazy"
              alt="logo"
              src={logo}
            />
            <div className={styles.logoContentInner}>
              <a
                href="https://x.com/kagi_finance"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className={styles.frameChild14}
                  loading="lazy"
                  alt="X Icon"
                  src="assets/icons/x.svg"
                />
              </a>

              <a
                href="https://t.me/+pjKbbV4VgipkYmU1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className={styles.frameChild14}
                  loading="lazy"
                  alt="Telegram Icon"
                  src="assets/icons/tele.svg"
                />
              </a>
              <a
                href="https://t.me/+pjKbbV4VgipkYmU1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className={styles.frameChild14}
                  loading="lazy"
                  alt="Telegram Icon"
                  src="assets/icons/Discord-1.svg"
                />
              </a>

              {/* <a
                href="https://example.com/linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className={styles.frameChild14}
                  loading="lazy"
                  alt="LinkedIn Icon"
                  src="assets/icons/lin.svg"
                />
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
