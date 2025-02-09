import React from "react";
import "./Contactus.css";

const ContactSection = () => {
  return (
    <div className="contact-container">
      <img
        src="./myimgs/space3.png"
        alt="Background"
        className="background-image"
      />

      <div className="contact-content">
        <h2 className="hidding2">
          NOUS <span>CONTACTER</span>
        </h2>

        <div className="contact-info">
          <div>
            <h3>ADRESSE</h3>
            <p>AGENCE POINT D'ORGUE</p>
            <p>4 PLACE DU 8 MAI 1945</p>
            <p>92300 LEVALLOIS PERRET</p>
          </div>

          <div>
            <h3>CONTACT</h3>
            <p>contact@po.agency</p>
            <p>01 82 83 00 01</p>
          </div>

          <div>
            <h3>SOCIAL</h3>
            <p>INSTAGRAM</p>
            <p>LINKEDIN</p>
            <p>STUDIO MARCEL</p>
          </div>
        </div>
      </div>

      <div className="contact-footer">
        <div className="colorbar">
          <div className="color red"></div>
          <div className="color blue"></div>
          <div className="color yellow"></div>
          <div className="color black"></div>
        </div>

        <p>
          Nous sommes toujours à la recherche de personnalités talentueuses et
          motivées pour rejoindre notre équipe grandissante.
        </p>
        <p>
          Si vous êtes intéressé.e, <a href="#Section">contactez-nous</a>.
        </p>
        <div className="footer-bar">
          <div className="footer-left">
            <p>
              <strong>
                <img
                  src="./myimgs/fram.png"
                  alt="framlogo"
                  className="logofooter"
                ></img>
                To.Stars
              </strong>
            </p>
          </div>
          <p className="parageraf">
            ALL RIGHT RESERVED <br></br>©2025 POINT D'ORGUE
          </p>
          <div className="footer-right">
            <p>
              {new Date().getDate()} <strong>FEV</strong>{" "}
              <span className="year">{new Date().getFullYear()}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
