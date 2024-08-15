import React from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <section className={styles.headerSection}>
      <div className={styles.titleText}>
        <h1 className={styles.title}>
          Powering <span className={styles.highlight}>Bitcoin DeFi</span> with
          easy
          <br />
          and trusted{" "}
          <span className={styles.highlight} style={{ color: "#19363A" }}>
            token management
          </span>
        </h1>
        <h2 className={styles.subtitle}>
          A powerful toolkit for users, protocols, investors, and
          <br /> innovators on the Bitcoin Ecosystem
        </h2>
      </div>
    </section>
  );
};

export default Header;
