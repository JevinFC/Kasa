import React from "react";
import Banner from "../../components/banner/banner";
import Card from "../../components/card/card";
import homes from "../../datas/homes.json";
import "./home.scss";
import imgBannerAccueil from "../../assets/ImageBanner.png";

function Home() {
  return (
    <div className="main-container">
      <Banner imgSrc={imgBannerAccueil} text="Chez vous et partout ailleurs" />
      <main>
        <div className="card-container">
          {homes.map((home) => (
            <Card key={home.id} home={home} />
          ))}
        </div>
      </main>
    </div>
  );
}
export default Home;
