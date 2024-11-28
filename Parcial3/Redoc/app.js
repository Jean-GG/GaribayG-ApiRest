const express = require("express");
const path = require("path");
const redoc = require("redoc-express");

const app = express();

// Ruta para servir el archivo JSON
app.get("/openapi.json", (req, res) => {
  res.sendFile(path.join(__dirname, "openapi.json"));
});

// Ruta para la documentación con Redoc
app.get("/docs", redoc({
  title: "Documentación de API",
  specUrl: "/openapi.json"
}));

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log(`Documentación disponible en http://localhost:${PORT}/docs`);
});
