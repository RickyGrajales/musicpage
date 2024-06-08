// src/pages/Blog.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Blog = () => (
  <>
    <Header />
    <section>
      <h2>Blog</h2>
      <div>
        <h3>Entrada 1: Título</h3>
        <p>Resumen</p>
        <button>Leer más...</button>
      </div>
      <div>
        <h3>Entrada 2: Título</h3>
        <p>Resumen</p>
        <button>Leer más...</button>
      </div>
    </section>
    <Footer />
  </>
);

export default Blog;
