import { FunctionComponent } from "react";
import logo from "/assets/Logo Kagi.png"
import "./NavBar.css";

export type NavigationBarType = {
  className?: string;
};

const NavigationBar: FunctionComponent<NavigationBarType> = ({ className = "" }) => {
  return (
    <div className={`rectangle-group ${className}`}>
      <div className="logo-kagi-wrapper">
        <img
          className="logo-kagi-icon"
          loading="lazy"
          alt="Kagi Logo"
          src={logo}
        />
      </div>
      <div className="navigation-bar">
        <div className="home-parent">
          <div className="home">
            <div className="home-wrapper">
              <a className="home1">Home</a>
            </div>
          </div>
          <div className="home">
            <div className="home-wrapper">
              <a className="about-us1">About Us</a>
            </div>
          </div>
          <div className="home">
            <div className="home-wrapper">
              <a className="project-features1">Project Features</a>
            </div>
          </div>
          <div className="home">
            <div className="home-wrapper">
              <a className="investor-features1">Investor Features</a>
            </div>
          </div>
          <div className="home">
            <div className="home-wrapper">
              <a className="integrations1">Integrations</a>
            </div>
          </div>
          <div className="app-coming-soon-wrapper">
            <a className="app-coming-soon">App Coming Soon</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
