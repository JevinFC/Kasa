import React from "react";
import { FaStar } from "react-icons/fa";
import "./rating.scss";

function Rating({ score }) {
  const totalStars = 5;
  const filledColor = "#ff6060";
  const emptyColor = "#E3E3E3";

  return (
    <div className="rating">
      {[...Array(totalStars)].map((_, index) => (
        <FaStar
          key={index}
          className="star"
          color={index < score ? filledColor : emptyColor}
        />
      ))}
    </div>
  );
}

export default Rating;
