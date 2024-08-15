import { FunctionComponent } from "react";
import GroupComponent from "../GroupComponent/GroupComponent";
import styles from "./Services.module.css";

export type ServicesType = {
  className?: string;
};

const Services: FunctionComponent<ServicesType> = ({ className = "" }) => {
  return (
    <section id="Services" className={`${styles.services} ${className}`}>
      <div className={styles.servicesBackground} />
      <div className={styles.contentContainer}>
        <h1 className={styles.title}>Why Kagi? </h1>
        <p className={styles.description}>
          Empowering Bitcoin DeFi with turnkey token management solutions. From
          creation to vesting, liquidity locks to a vested token marketplace,
          Kagi Finance provides everything developers need to succeed on any
          Bitcoin L2.
        </p>
        <div className={styles.groupContainer}>
          <GroupComponent
            group="assets/icons/noun-blockchain-6890992 1.svg"
            liquidityLocks="Liquidity Locks"
            hoverImage="assets/icons/onhover/noun-blockchain-6890992 2.svg"
          />
          <GroupComponent
            group="assets/icons/noun-digital-token-6391218 1.svg"
            propWidth="82px"
            liquidityLocks="Team Token Locks"
            hoverImage="assets/icons/onhover/noun-digital-token-6391218 2.svg"
          />
          <GroupComponent
            group="assets/icons/noun-token-4814702 1.svg"
            propWidth="82px"
            liquidityLocks="Token Creation"
            hoverImage="assets/icons/onhover/noun-token-4814702 2.svg"
          />
          <GroupComponent
            group="assets/icons/noun-marketplace-6880611 1.svg"
            propWidth="72px"
            liquidityLocks="Marketplace"
            hoverImage="assets/icons/onhover/noun-marketplace-6880611 2.svg"
          />
          <GroupComponent
            group="assets/icons/noun-staking-5677836 1.svg"
            propWidth="72px"
            liquidityLocks="Staking Platform"
            hoverImage="assets/icons/onhover/noun-staking-5677836 2.svg"
          />
          <GroupComponent
            group="assets/icons/noun-token-2241985 1.svg"
            propWidth="72px"
            liquidityLocks="Token Vesting"
            hoverImage="assets/icons/onhover/noun-token-2241985 2.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
