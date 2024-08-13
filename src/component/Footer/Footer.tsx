import { FunctionComponent } from "react";
import logo from "/assets/Logo Kagi.png";
import lock from "/assets/icons/group-2.svg";
import "./Footer.css";

export type Footer = {
  className?: string;
};

const Footer: FunctionComponent<Footer> = ({ className = "" }) => {
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
          <img className="lock" alt="Lock" src={lock} />
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
              <a
                href="https://x.com/kagi_finance"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="frame-child14"
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
                  className="frame-child14"
                  loading="lazy"
                  alt="Telegram Icon"
                  src="assets/icons/tele.svg"
                />
              </a>

              <a
                href="https://example.com/linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="frame-child14"
                  loading="lazy"
                  alt="LinkedIn Icon"
                  src="assets/icons/lin.svg"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
