import React from "react";
import "./Aboutsecond.css";

const App = () => {
  return (
    <div className="expertise-container">
      <div className="scrolling-text">
        <span>
          NOS EXPERTISES - STRATEGY - ADVISORY - CREATORS - PRODUCTION - NOS
          EXPERTISES - STRATEGY - ADVISORY - CREATORS - PRODUCTION
        </span>
      </div>

      <div className="expertise-wrapper">
        <div className="expertise-title">
          <h2>
            NOS <span>EXPERTISES</span>
          </h2>
        </div>
        <div className="expertise-section">
          <div className="expertise">
            <h2>
              STRATEGY <span className="littlnum">001</span>
            </h2>
            <p>
              L’équipe Strat’ est spécialisée dans l’élaboration, et la
              réalisation de campagnes sur mesure, one-shot ou always-on, à
              destination exclusive du marché de la cosmétique et du luxe.
            </p>
          </div>
          <div className="expertise">
            <h2>
              ADVISORY <span className="littlnum">002</span>
            </h2>
            <p>
              L’équipe Conseil accompagne ses clients tout au long de l’année
              dans leur relation avec les créateurs de contenu : en veille
              permanente, nous entretenons une relation de confiance avec un
              réseau qualifié de plusieurs centaines de créateurs, en France et
              à l’international.
            </p>
          </div>
          <div className="expertise">
            <h2>
              CREATORS <span className="littlnum">003</span>
            </h2>
            <p>
              Le pôle Creators de l’agence représente en exclusivité une
              quarantaine de créateurs de contenu. Cette relation privilégiée
              nous permet d’être au plus près des tendances des réseaux sociaux.
            </p>
          </div>
          <div className="expertise">
            <h2>
              PRODUCTION <span className="littlnum">004</span>
            </h2>
            <p>
              Nos équipes produisent des événements, des shootings, des
              campagnes vidéo de A à Z. L’agence dispose de son propre studio de
              tournage et de production.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
