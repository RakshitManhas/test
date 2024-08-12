import { FunctionComponent } from "react";
import "./Integrations.css";

export type IntegrationsType = {
  className?: string;
};

const Integrations: FunctionComponent<IntegrationsType> = ({
  className = "",
}) => {
  return (
    <div className={`integrations-container ${className}`}>
      <div className="integrations2">
        <div className="top-l2-integrations-wrapper">
          <h1 className="top-l2-integrations-container">
            <span>
              <span>Top</span>
            </span>
            <b className="l2-integrations">
              <span>{` `}</span>
              <span>L2 Integrations</span>
            </b>
          </h1>
        </div>
        <div className="frame-div">
          <img
            className="frame-child11"
            alt="kagi-logo-vector"
            src="assets/icons/group-35244-1.svg"
          />
          <div className="ellipse-parent2">
            <div className="ellipse-div" />
            <img
              className="image-17-icon"
              loading="lazy"
              alt="1"
            src="assets/icons/image-17-1@2x.png"
            />
          </div>
          <div className="ellipse-parent">
            <div className="ellipse-div" />
            <img
              className="image-17-icon"
              loading="lazy"
              alt="2"
              src="assets/icons/image-17@2x.png"
            />
          </div>
          <div className="ellipse-group">
            <div className="ellipse-div" />
            <img
              className="image-17-icon"
              loading="lazy"
              alt="3"
              src="assets/icons/image-19@2x.png"
            />
          </div>
          <div className="ellipse-container">
            <div className="ellipse-div" />
            <img
              className="image-17-icon"
              loading="lazy"
              alt="4"
              src="assets/icons/image-16@2x.png"
            />
          </div>
          <div className="ellipse-parent1">
            <div className="ellipse-div" />
            <img
              className="image-17-icon"
              loading="lazy"
              alt="6"
              src="assets/icons/image-20@2x.png"
            />
          </div>
          <img
            className="kagi-finance-icon"
            loading="lazy"
            alt=""
            src="assets/kagi-finance.svg"
          />
          <img
            className="vector-icon"
            alt=""
            src="assets/vector-123.svg"
          />
          <div className="frame-parent1">
          <div className="ellipse-div" />
            <img
              className="image-17-icon"
              loading="lazy"
              alt="6"
              src="assets/icons/image-20-1@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integrations;
