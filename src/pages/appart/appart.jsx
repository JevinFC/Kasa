import React from "react";
import homes from "../../datas/homes.json";
import { useParams, Navigate } from "react-router";
import "./appart.scss";
import Collapse from "../../components/collapse/collapse";
import Host from "../../components/host/host.jsx";
import Rating from "../../components/rating/rating.jsx";
import Tags from "../../components/tags/tags.jsx";

function Appart() {
  const { id } = useParams();
  const appartement = homes.find((home) => home.id === id);

  if (!appartement) {
    return <Navigate to="/404" replace />;
  }
  return (
    <div className="main-container">
      <main>
        <div className="divImgAppart">
          <img
            src={appartement.cover}
            alt={appartement.title}
            className="imgAppart"
          />
        </div>
        <div className="infodiv">
          <h1 className="titleAppart">{appartement.title}</h1>
          <Host
            name={appartement.host.name}
            picture={appartement.host.picture}
          />
        </div>
        <p className="appart-location">{appartement.location}</p>

        <div className="tags-rating">
          <Tags tags={appartement.tags} />
          <Rating score={parseInt(appartement.rating, 10)} />
        </div>
        <div className="collapse-div">
          <Collapse title="Description" content={appartement.description} />
          <Collapse
            title="Équipements"
            content={appartement.equipments}
            isList={true}
          />
        </div>
      </main>
    </div>
  );
}
export default Appart;
