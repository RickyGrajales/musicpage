// src/pages/Events.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Events = () => (
  <>
    <Header />
    <section>
      <h2>Próximos Eventos</h2>
      <ul>
        <li>Evento 1: Fecha, Lugar, Tipo</li>
        <li>Evento 2: Fecha, Lugar, Tipo</li>
        <li>Evento 3: Fecha, Lugar, Tipo</li>
      </ul>
    </section>
    <Footer />
  </>
);

export default Events;
