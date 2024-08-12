import { FunctionComponent } from "react";
import GroupComponent from "../GroupComponent/GroupComponent";
import "./Services.css";

export type ServicesType = {
  className?: string;
};

const Services: FunctionComponent<ServicesType> = ({ className = "" }) => {
  return (
    <section className={`services ${className}`}>
      <div className="services-child" />
      <div className="services-item" />
      <div className="services-inner">
        <div className="frame-parent">
          <div className="what-does-kagi-offer-wrapper">
            <h1 className="what-does-kagi">What does Kagi offer ?</h1>
          </div>
          <div className="with-kagis-comprehensive">
            With Kagi’s comprehensive toolkit, unlock the full potential of your
            digital assets. From token creation to innovative trading and
            staking solutions, we cover every stage of your project's journey on
            Bitcoin L2 networks. Optimize your tokenomics and community
            engagement with Kagi Finance's cutting-edge services.
          </div>
        </div>
      </div>
      <div className="frame-group">
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
          propWidth="82px"
          liquidityLocks="Marketplace"
          hoverImage="assets/icons/onhover/noun-marketplace-6880611 2.svg"
        />
        <GroupComponent
          group="assets/icons/noun-staking-5677836 1.svg"
          propWidth="82px"
          liquidityLocks="Staking Platform"
          hoverImage="assets/icons/onhover/noun-staking-5677836 2.svg"
        />
        <GroupComponent
          group="assets/icons/noun-token-2241985 1.svg"
          propWidth="82px"
          liquidityLocks="Token Vesting"
          hoverImage="assets/icons/onhover/noun-token-2241985 2.svg"
        />
      </div>
    </section>
  );
};

export default Services;
