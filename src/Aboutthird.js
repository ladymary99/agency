import React from "react";
import "./Aboutthird.css";

const StudioSection = () => {
  return (
    <section className="studio-section">
      <div className="studio-content">
        <div className="studio-images">
          <img
            src="./myimgs/section1.jpeg"
            alt="Studio Setup"
            className="main-img"
          />
          <div className="small-images">
            <img src="./myimgs/project5.jpg" alt="Red Background" />
            <img src="./myimgs/project3.jpg" alt="Studio Office" />
            <img src="./myimgs/project4.jpg" alt="Lighting Setup" />
          </div>
        </div>

        <div className="studio-text">
          <h1>
            LE <br></br>
            <span>STUDIO</span>
          </h1>
          <span className="bold-text">MARCEL</span>
          <p>
            <img src="./myimgs/fram.png" alt="fram" className="logofram"></img>
            Ce studio permet à nos talents de réaliser certains de leurs
            contenus plus aisément, et nous garantit une grande agilité de
            production pour toutes nos campagnes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StudioSection;
