import React from "react";
import "./error404.scss";
import { Link } from "react-router";

function Error404() {
  return (
    <main>
      <div className="main-container404">
        <div className="span404">
          <span>404</span>
        </div>

        <p className="p404">Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="link404">
          Retournez à la page d'accueil
        </Link>
      </div>
    </main>
  );
}
export default Error404;
