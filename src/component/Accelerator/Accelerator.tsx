import React from "react";
import styles from "./Accelerator.module.css";

export type AcceleratorProps = {
  className?: string;
};

const Accelerator: React.FC<AcceleratorProps> = ({ className = "" }) => {
  return (
    <section className={`${styles.accelerator} ${className}`}>
      <h1 className={styles.title}>
        Accelerating Bitcoin Layer 2
        <br />
        <span className={styles.highlight}>Ecosystem Growth</span>
      </h1>
      <div className={styles.serviceContent}>
        <div className={styles.dottedLine}>
          <img src="assets/dotline.png" className={styles.icon} alt="Dotted Line" />
        </div>
        <div className={styles.rectangleParent1}>
          <div className={styles.forProjects}>
            <span className={styles.step}>01. </span> For Projects
          </div>
          <div className={styles.description}>
            Standardized token management workflow in the Bitcoin Layer 2 space by offering features such as liquidity locks, staking, token creation, team token locks, and token vesting, while also providing user management and a marketplace for vested tokens.
          </div>
        </div>
        <div className={styles.rectangleParent2}>
          <div className={styles.forInvestors}>
            <span className={styles.step}>02. </span> For Investors
          </div>
          <div className={styles.description}>
            A secure dashboard for multi-token tracking, real-time analytics, claims history, future vesting tracking, and enhanced security, providing real-time transparency and instant withdrawal capabilities.
          </div>
        </div>
      </div>
      <div className={styles.serviceImageContainer}>
        <img
          src="assets/Ecosystem Growth vector.svg"
          alt="Service"
          className={styles.serviceImage}
        />
      </div>
    </section>
  );
};

export default Accelerator;
