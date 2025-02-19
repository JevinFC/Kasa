import React from "react";
import "./rating.scss";
import greyStar from "../../assets/greyStar.png";
import pinkStar from "../../assets/pinkStar.png";
function Rating({ score }) {
  const totalStars = 5;

  return (
    <div className="rating">
      {[...Array(totalStars)].map((_, index) => (
        <img
          key={index}
          src={index < score ? pinkStar : greyStar}
          alt={index < score ? "Étoile rose" : "Étoile grise"}
          className="star"
        />
      ))}
    </div>
  );
}

export default Rating;
