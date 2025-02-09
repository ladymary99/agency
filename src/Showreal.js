import React from "react";
import "./Showreal.css";

const ShowreelSection = () => {
  return (
    <section className="showreel-section">
      <video autoPlay loop muted className="background-video">
        <source src="/vid.mp4" type="video/mp4" />
        dont suport!
      </video>
      <div className="overlay">
        <p className="top-text">Point d'Orgue reel 2023</p>
        <h1 className="title">
          SHOW <span className="title2">REEL</span>{" "}
        </h1>

        <p className="bottom-text">
          <img src="./myimgs/fram.png" alt="logo" className="logosamll2"></img>
          Nos dernières productions et évènements
        </p>
      </div>
    </section>
  );
};

export default ShowreelSection;
