import { FunctionComponent } from "react";
import logo from "/assets/Logo Kagi.png"
import lock from "/assets/icons/group-2.svg"
import "./Footer.css";

export type Footer = {
  className?: string;
};

const Footer: FunctionComponent<Footer> = ({
  className = "",
}) => {
  return (
    <section className={`website-layout-child ${className}`}>
      <div className="frame-parent2">
        <div className="rectangle-parent3">
          <div className="lock-call-to-action">
            <h1 className="want-to-lock">Want to Lock your tokens ?</h1>
            <div className="kagi-allows-companies">
              Kagi allows companies to create, vest, lock, track, and spin up
              staking pools for their tokens.
            </div>
          </div>
          <img
            className="lock"
            alt="Lock"
            src={lock}
          />
        </div>
        <div className="logo-content-wrapper">
          <div className="logo-content">
            <img
              className="kagi-logo-icon"
              loading="lazy"
              alt="logo"
              src={logo}
            />
            <div className="logo-content-inner">
              <img
                className="frame-child14"
                loading="lazy"
                alt=""
                src="assets/icons/group-35275.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
