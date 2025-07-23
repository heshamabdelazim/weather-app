import React from "react";
// css
import "./Header.css";

// images
import clouds2 from "../../../public/clouds2.png";

const Header = () => {
  return (
    <header>
      <div className="head">
        <h1>WEATHER APP</h1>
        <p>Know, Before you go.</p>
        <img src={clouds2} alt="clouds" className="right" />
        <img src={clouds2} alt="clouds" className="left" />
      </div>
    </header>
  );
};

export default Header;
