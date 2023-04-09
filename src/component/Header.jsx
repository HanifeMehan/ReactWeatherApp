import React from "react";
import logo from "../img/weatherLogo.jpg";
function Header() {
  return (
    <header className="headerContainer">
      <div className="header_Logo">
        <div className="header__logo">
          <img src={logo} alt="Weather App" />
        </div>
        <div className="header__title">
          <h1>Weather App</h1>
        </div>
      </div>

    </header>
  );
}

export default Header;
