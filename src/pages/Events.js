// src/pages/Events.js
// Events.js
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Events.css"; // Importa el CSS
import music_guitar from "../assets/music_guitar.jpg"; // Importa la imagen

const Events = () => (
  <>
    <Header />
    <main
      className="retro-main"
      style={{ backgroundImage: `url(${music_guitar})` }}
    >
      <section className="retro-section">
        <h2 className="retro-heading">Próximos Eventos</h2>
        <ul className="retro-event-list">
          <li className="retro-event-item">
            <strong>Concierto de Verano</strong>: 22 de julio de 2024, Teatro
            Municipal, Música en vivo.
          </li>
          <li className="retro-event-item">
            <strong>Cali Expo Show</strong>: 5-10 de agosto de 2024, Centro de
            Convenciones Valle del pacífico, ¡compra tu boleta, No Te Lo
            Pierdas!.
          </li>
          <li className="retro-event-item">
            <strong>Conferencia Tech 2024</strong>: 15 de septiembre de 2024,
            Hotel Innovación, Tecnología y Networking, música y concierto en
            vivo.
          </li>
          <li className="retro-event-item">
            <strong>Festival Gastronómico</strong>: 20-22 de octubre de 2024,
            Plaza Central, Comida y Bebidas.
          </li>
          <li className="retro-event-item">
            <strong>Exposición de Arte Contemporáneo</strong>: 1-7 de noviembre
            de 2024, Museo de Arte Moderno, Arte Visual.
          </li>
        </ul>
      </section>
    </main>
    <Footer />
  </>
);

export default Events;
