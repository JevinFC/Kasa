import React from "react";
import "./card.scss";
import { Link } from "react-router";

function Card({ home }) {
  return (
    <Link
      to={`/src/pages/appart/${home.id}`}
      key={home.id}
      className="card-link"
    >
      <div className="card" style={{ backgroundImage: `url(${home.cover})` }}>
        <h3 className="card-title">{home.title}</h3>
      </div>
    </Link>
  );
}

export default Card;
