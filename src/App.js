import React from "react";
import Header from "./Header";
import Section from "./Section";
import Projects from "./Projects";
import Showreal from "./Showreal";
import Aboutus from "./Aboutus";
import Aboutsecond from "./Aboutsecond";
import Aboutthird from "./Aboutthird";
import Contactus from "./Contactus";
import CustomCursor from "./CustomCursor";
import "./App.css";

const App = ({ children }) => {
  return (
    <div className="App">
      <CustomCursor />
      {children}
      <Header />
      <Section />
      <div id="projects">
        <Projects />
      </div>
      <div id="palanets">
        <Showreal />
      </div>
      <div id="about">
        <Aboutus />
        <Aboutsecond />
        <Aboutthird />
      </div>
      <div id="contact">
        <Contactus />
      </div>
    </div>
  );
};

export default App;
