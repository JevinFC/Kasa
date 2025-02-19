import React from "react";
import Collapse from "../../components/collapse/collapse";
import "./about.scss";
import Banner from "../../components/banner/banner";
import imgBannerAbout from "../../assets/banner-about.png";
import aboutData from "../../datas/about-data.json";

function About() {
  return (
    <main>
      <div className="banner-about">
        <Banner imgSrc={imgBannerAbout} />
      </div>
      <div className="collapse-about">
        {aboutData.map((item, index) => (
          <Collapse key={index} title={item.title} content={item.content} />
        ))}
      </div>
    </main>
  );
}

export default About;
