import React from "react";
import "./banner.scss";

function Banner({ imgSrc, text }) {
  return (
    <div className="container-banner">
      <div className="divBanner">
        <img
          src={imgSrc}
          alt="Image d'une falaise à côté de la mer"
          className="imgBannerAccueil"
        />
        {text && <p>{text}</p>}
      </div>
    </div>
  );
}
export default Banner;
