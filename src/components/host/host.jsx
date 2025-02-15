import "./host.scss";
import React from "react";

function Host({ name, picture }) {
  const [prenom, nom] = name.split(" ");
  return (
    <div className="host">
      <div className="host-info">
        <span className="host-prenom">{prenom}</span>
        <span className="host-nom">{nom}</span>
      </div>
      <img src={picture} alt={name} className="host-img" />
    </div>
  );
}
export default Host;
