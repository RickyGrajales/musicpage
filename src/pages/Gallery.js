// src/pages/Gallery.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Gallery = () => (
  <>
    <Header />
    <section>
      <h2>Galería de Fotos</h2>
      <div className="gallery">
        <img src="photo1.jpg" alt="Foto 1" />
        <img src="photo2.jpg" alt="Foto 2" />
        <img src="photo3.jpg" alt="Foto 3" />
        <img src="photo4.jpg" alt="Foto 4" />
        <img src="photo5.jpg" alt="Foto 5" />
        <img src="photo6.jpg" alt="Foto 6" />
        <img src="photo7.jpg" alt="Foto 7" />
        <img src="photo8.jpg" alt="Foto 8" />
        <img src="photo9.jpg" alt="Foto 9" />
        <img src="photo10.jpg" alt="Foto 10" />
      </div>
    </section>
    <Footer />
  </>
);

export default Gallery;
