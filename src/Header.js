import React, { useState, useEffect } from "react";
import "./Header.css";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={`header ${scrolled ? "scrolled" : ""} ${
        isMobile ? "mobile" : ""
      }`}
    >
      <div className="logo-container">
        <div className={`logo ${scrolled ? "small" : ""}`}>
          <img
            className={`logo ${scrolled ? "small" : ""}`}
            src="./myimgs/fram.png"
            alt="logo"
          />
        </div>
        {!scrolled && <span className="site-name">To.Stars</span>}
      </div>
      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        {!scrolled && !isMobile && (
          <ul className="nav-items">
            <li>
              <a href="#palanets">Planètes</a>
            </li>
            <li>
              <a href="#projects">Projets</a>
            </li>
            <li>
              <a href="#about">Expérience</a>
            </li>
            <li>
              <a href="#contact">À propos de nous</a>
            </li>
          </ul>
        )}
        {(scrolled || isMobile) && (
          <button className="menu-button" onClick={toggleMenu}>
            Menu
          </button>
        )}
      </nav>
      {menuOpen && (
        <div className="dropdown-menu">
          <a href="#palanets">Planètes</a>
          <a href="#projects">Projets</a>
          <a href="#about">Expériences</a>
          <a href="#contact">À propos de nous</a>
        </div>
      )}
    </header>
  );
}

export default Header;
