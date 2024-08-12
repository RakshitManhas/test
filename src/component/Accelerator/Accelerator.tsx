import React from "react";
import "./Accelerator.css";

export type AcceleratorProps = {
  className?: string;
};

const Accelerator: React.FC<AcceleratorProps> = ({ className = "" }) => {
  return (
    <section className={`accelerator ${className}`}>
      <h1 className="title">
        Catalyzing growth in the
        <br />
        <span className="highlight">Bitcoin layer-2 </span>
        <span className="highlight" style={{ color: "#19363A" }}>
          space
        </span>
      </h1>
      <div className="service-image-container">
        <img
          src="assets/Ecosystem Growth vector.png" 
          alt="Service"
          className="service-image"
        />
      </div>
      <div className="service-content">
        <div className="dotted-line">
          <img src="assets/dotline.png" className="icon" alt="Dotted Line" />
        </div>
        <div className="rectangle">
          <div className="rectangle-parent1">
            <div className="for-projects">
              <span className="step">01. </span> For Projects
            </div>
            <div className="description">
              Standardized token management workflow in the Bitcoin Layer 2
              space by offering features such as liquidity locks, staking, token
              creation, team token locks, and token vesting, while also
              providing user management and a marketplace for vested tokens.
            </div>
          </div>
          <div className="rectangle-parent2">
            <div className="for-investors">
              <span className="step">02. </span> For Investors
            </div>
            <div className="description">
              A secure dashboard for multi-token tracking, real-time analytics,
              claims history, future vesting tracking, and enhanced security,
              providing real-time transparency and instant withdrawal
              capabilities.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accelerator;
