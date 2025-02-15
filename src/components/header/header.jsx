import "./header.scss";
import logo from "../../assets/LOGO.png";
import React from "react";
import { NavLink } from "react-router";

function Header() {
  return (
    <div className="app-container">
      <header>
        <nav>
          <img src={logo} alt="logo de Kasa" className="logo" />
          <div className="navlinks">
            <NavLink to="/home">Accueil</NavLink>
            <NavLink to="/about">A Propos</NavLink>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
