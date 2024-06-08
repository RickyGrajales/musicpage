// src/pages/Home.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MainImage from '../components/MainImage';

export const Home = () => (
  <>
    <Header />
    <MainImage />
    <section>
      <h2>Últimos Eventos</h2>
      <ul>
        <li>Evento 1: Fecha, Lugar, Tipo</li>
        <li>Evento 2: Fecha, Lugar, Tipo</li>
      </ul>
    </section>
    <section>
      <h2>Galería de Fotos (Destacadas)</h2>
      <div className="gallery">
        <img src="photo1.jpg" alt="Foto 1" />
        <img src="photo2.jpg" alt="Foto 2" />
        <img src="photo3.jpg" alt="Foto 3" />
        <img src="photo4.jpg" alt="Foto 4" />
      </div>
    </section>
    <section>
      <h2>Últimas Entradas del Blog</h2>
      <ul>
        <li>Entrada 1: Título, Resumen</li>
        <li>Entrada 2: Título, Resumen</li>
      </ul>
    </section>
    <section>
      <h2>Información de Contacto</h2>
      <p>Email, Redes Sociales</p>
    </section>
    <Footer />
  </>
);

export default Home;
