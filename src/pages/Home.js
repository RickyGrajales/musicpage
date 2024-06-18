// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom"; // Importa Link para la navegación
import Header from "../components/Header";
import Footer from "../components/Footer";
import bandaelectrica from "../assets/bandaelectrica.avif"; // Importa la imagen

const Home = () => (
  <>
    <Header />
    <div style={styles.heroSection}>
      <div style={styles.content}>
        <Link to="/MusicSection" style={styles.button}>
          Ir a la Sección de Música
        </Link>
      </div>
    </div>
    <Footer />
  </>
);

const styles = {
  heroSection: {
    position: "relative",
    width: "100%",
    height: "calc(160vh - 10px)", // 100vh menos la altura del Header y Footer
    backgroundImage: `url(${bandaelectrica})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "flex-start", // Alínea los elementos en la parte superior
    justifyContent: "center",
    paddingTop: "110px", // Añade un poco de espacio superior para el logo
  },
  content: {
    position: "fixed",
    zIndex: 2,
    marginTop: "65px", // Ajusta el margen superior según la altura del logo
    textAlign: "center",
    right: "78%",
  },
  button: {
    backgroundColor: "rgba(184, 134, 11, 1)", // Color retro
    color: "white",
    padding: "15px 30px",
    borderRadius: "5px",
    border: "none",
    textDecoration: "none",
    fontSize: "15px",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
};

export default Home;
