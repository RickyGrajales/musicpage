const express = require("express");
const path = require("path");
const app = express();
const port = 3001; // Cambia el puerto si es necesario

// Middleware para servir archivos estáticos
app.use(
  "/tracks",
  express.static(path.join(__dirname, "..", "public", "tracks"))
);

// Endpoint para el JSON
app.get("/api/tracks", (req, res) => {
  const tracks = [
    {
      id: 1,
      title: "I belong to you",
      description: "Esta es la descripción de la Canción Ejemplo 1.",
      audioUrl: "",
      imageUrl: "", // Si tienes una imagen, especifica su URL aquí
    },
    {
      id: 2,
      title: "Canción Ejemplo 2",
      description: "Esta es la descripción de la Canción Ejemplo 2.",
      audioUrl: "http://localhost:3001/tracks/ejemplo2.mp3",
      imageUrl: "",
    },
    {
      id: 3,
      title: "Canción Ejemplo 3",
      description: "Esta es la descripción de la Canción Ejemplo 3.",
      audioUrl: "http://localhost:3001/tracks/ejemplo3.mp3",
      imageUrl: "",
    },
  ];

  res.json(tracks);
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
