import React from "react";
import "./Aboutus.css";

const models = [
  {
    name: "JOHAN PAPZ",
    image: "./myimgs/section1.jpeg",
  },
  {
    name: "RICHARD",
    image: "./myimgs/section7.jpg",
  },
  {
    name: "MARION CAMELEON",
    image: "./myimgs/section3.webp",
  },
  {
    name: "MARIE GAGUECH",
    image: "./myimgs/section6.jpg",
  },
];

const ModelsSection = () => {
  return (
    <div className="models-section">
      <h1 className="section-title">Des talents</h1>
      <span className="section-title2">engagés et passionnés</span>
      <div className="section2">
        <p className="section-description">
          <img src="./myimgs/fram.png" alt="fram" className="imgfarm"></img>NOS
          CRÉATEURS RACONTENT DES HISTOIRES, CASSENT LES CODES DE LA BEAUTÉ,
          S’ENGAGENT POUR DES CAUSES QUI LEUR SONT CHÈRES, BROUILLENT LES PISTES
          DE L’IDENTITÉ DE GENRE, REDONNENT DU SOUFFLE, DE LA LÉGÈRETÉ, DU
          COURAGE, OU JUSTE LE SOURIRE À DES MILLIONS DE PERSONNES.
        </p>
      </div>
      <div className="models-grid">
        {models.map((model, index) => (
          <div key={index} className="model-card">
            <img src={model.image} alt={model.name} className="model-image" />
            <h3 className="model-name">{model.name}</h3>
            <span className="model-number">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModelsSection;
