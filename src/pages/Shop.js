// src/pages/Shop.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Shop = () => (
  <>
    <Header />
    <section>
      <h2>Tienda Online</h2>
      <div className="shop">
        <div>[Producto 1]</div>
        <div>[Producto 2]</div>
        <div>[Producto 3]</div>
        <div>[Producto 4]</div>
        <div>[Producto 5]</div>
        <div>[Producto 6]</div>
        <div>[Producto 7]</div>
        <div>[Producto 8]</div>
      </div>
      <h3>Carrito de Compra</h3>
      <ul>
        <li>Producto 1: Nombre, Precio</li>
        <li>Producto 2: Nombre, Precio</li>
      </ul>
      <p>Total: Precio Total</p>
      <button>Realizar Compra</button>
    </section>
    <Footer />
  </>
);

export default Shop;
