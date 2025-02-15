import React from "react";
import "./footer.scss";
import LogoFooter from "../../assets/LOGOBN.png";

function Footer() {
  return (
    <div className="div-footer">
      <img src={LogoFooter} alt="Logo de Kasa" className="logo-footer" />
      <p>© 2024 Kasa. All rights reserved.</p>
    </div>
  );
}

export default Footer;
