import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Importa el logo
import "./Header.css"; // Importa los estilos

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <Link to="/" className="logoLink">
        <img src={logo} alt="Logo de mi sitio" className="logo" />
      </Link>
      <button onClick={toggleMenu} className="hamburgerButton">
        ☰
      </button>
      <nav className={`nav ${isMenuOpen ? "navOpen" : ""}`}>
        <ul className="navList">
          <li>
            <Link to="/" className="navLink" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/events" className="navLink" onClick={toggleMenu}>
              Eventos
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="navLink" onClick={toggleMenu}>
              Galería
            </Link>
          </li>
          <li>
            <Link to="/shop" className="navLink" onClick={toggleMenu}>
              Tienda
            </Link>
          </li>
          <li>
            <Link to="/MusicSection" className="navLink" onClick={toggleMenu}>
              Songs
            </Link>
          </li>
          <li>
            <Link to="/contact" className="navLink" onClick={toggleMenu}>
              Contacto
            </Link>
          </li>
          <li>
            <Link to="/press" className="navLink" onClick={toggleMenu}>
              Prensa
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
