import React, { useState, useEffect } from "react";
import "./Section.css";

const images = [
  "./myimgs/space3.png",
  "./myimgs/space2.webp",
  "./myimgs/space1.webp",
];

function Section() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="section"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      <div className="info">
        <h2>Welcome to TO.STARS</h2>
        <p className="pra">
          This is a site of newly discovered space and galaxies / updated
          information for space time enthusiasts.
        </p>
        <div className="more">
          <a href="#more-info">For More</a>
          <img src="./myimgs/gif.gif" alt="gif"></img>
        </div>
      </div>
      <div className="ticker">
        <p>BREAKING NEWS: FOUND NEW PLANET!</p>
      </div>
    </div>
  );
}

export default Section;
