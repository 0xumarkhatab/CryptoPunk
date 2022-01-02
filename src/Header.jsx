import React from "react";
import cryptopunkLogo from "./assets/header/cryptopunk-logo.png";
import searchIcon from "./assets/header/search.png";
import themeSwitcher from "./assets/header/themeSwitch.png";

import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={cryptopunkLogo} alt="cryptoPunk Logo" />
      </div>
      <div className="searchInput">
        <img src={searchIcon} alt="searchIcon" />
        <input type="text" placeholder="Search NFTs" />
      </div>
      <div className="headerItems">
        <div className="headerItems">
          <p>Drops</p>
          <p>MarketPlace</p>
          <p>Create</p>
        </div>
        <div className="headerButtons">
          <div className="themeSwitcher">
            <img src={themeSwitcher} alt="" />
          </div>
          <div className="loginButton">GET IN</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
