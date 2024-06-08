// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <Link to="/">Home</Link> | 
      <Link to="/bio">Biografía</Link> | 
      <Link to="/events">Eventos</Link> | 
      <Link to="/gallery">Galería</Link> | 
      <Link to="/shop">Tienda</Link> | 
      <Link to="/blog">Blog</Link> | 
      <Link to="/contact">Contacto</Link> | 
      <Link to="/press">Prensa</Link>
    </nav>
  </header>
);

export default Header;
