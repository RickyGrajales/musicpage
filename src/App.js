// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Bio from "./pages/Bio";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Shop from "./pages/Shop";
import MusicSection from "./pages/MusicSection";
import Contact from "./pages/Contact";
import Press from "./pages/Press";

import "./styles.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/MusicSection" element={<MusicSection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/press" element={<Press />} />
      </Routes>
    </Router>
  );
}

export default App;
