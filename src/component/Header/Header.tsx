import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <section className="header-section">
      {/* <div className="background-grid"></div> */}
      <div className="title-text">
        <h1 className="title">
          Powering <span className="highlight">Bitcoin DeFi</span> with easy 
          <br/>and trusted <span className="highlight" style={{color:"#19363A"}}>token management</span>
        </h1>
        <h2 className="subtitle">
          A powerful tool for users, protocols, investors, and<br/> innovators on the BTC Layer 2
        </h2>
      
      </div>
    </section>
  );
};

export default Header;
