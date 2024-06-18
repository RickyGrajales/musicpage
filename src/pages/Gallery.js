import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import cuadroGuitarraElectrica from "../assets/cuadroGuitarraElectrica.jpg";
import retromicrophone from "../assets/retromicrophone.jpg";
import tarima from "../assets/tarima.jpg";
import tarima2 from "../assets/tarima2.jpg";
import "./Gallery.css"; // Importa el archivo CSS

const Gallery = () => (
  <>
    <Header />
    <section className="gallery-section">
      <h2 className="retro-heading">Galería de Fotos</h2>
      <div className="gallery">
        <div className="gallery-item">
          <img
            src={cuadroGuitarraElectrica}
            alt="Foto 1"
            className="retro-image"
          />
          <p className="image-description">
            Guitarra eléctrica en un escenario retro.
          </p>
        </div>
        <div className="gallery-item">
          <img src={retromicrophone} alt="Foto 2" className="retro-image" />
          <p className="image-description">Micrófono vintage en un estudio.</p>
        </div>
        <div className="gallery-item">
          <img src={tarima} alt="Foto 3" className="retro-image" />
          <p className="image-description">
            Tarima lista para una actuación en vivo.
          </p>
        </div>
        <div className="gallery-item">
          <img src={tarima2} alt="Foto 4" className="retro-image" />
          <p className="image-description">
            Vista cercana de una tarima iluminada.
          </p>
        </div>
        <div className="gallery-item">
          <img src="photo5.jpg" alt="Foto 5" className="retro-image" />
          <p className="image-description">Descripción de la foto 5.</p>
        </div>
        <div className="gallery-item">
          <img src="photo6.jpg" alt="Foto 6" className="retro-image" />
          <p className="image-description">Descripción de la foto 6.</p>
        </div>
        <div className="gallery-item">
          <img src="photo7.jpg" alt="Foto 7" className="retro-image" />
          <p className="image-description">Descripción de la foto 7.</p>
        </div>
        <div className="gallery-item">
          <img src="photo8.jpg" alt="Foto 8" className="retro-image" />
          <p className="image-description">Descripción de la foto 8.</p>
        </div>
        <div className="gallery-item">
          <img src="photo9.jpg" alt="Foto 9" className="retro-image" />
          <p className="image-description">Descripción de la foto 9.</p>
        </div>
        <div className="gallery-item">
          <img src="photo10.jpg" alt="Foto 10" className="retro-image" />
          <p className="image-description">Descripción de la foto 10.</p>
        </div>
      </div>
    </section>
    <Footer />
  </>
);

export default Gallery;
