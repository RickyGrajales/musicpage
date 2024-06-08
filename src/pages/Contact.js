// src/pages/Contact.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => (
  <>
    <Header />
    <section>
      <h2>Contacto</h2>
      <p>Email: [dirección de correo]</p>
      <p>Redes Sociales: 
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a>,
      <a href="https://x.com/?lang=es" target="_blank" rel="noopener noreferrer">Twitter</a>, 
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a></p>

    </section>
    <Footer />
  </>
);

export default Contact;
