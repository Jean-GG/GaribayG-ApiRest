const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const app = express();

// Ruta de Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// endpoint
app.get("/usuarios", (req, res) => {
  res.json([
    { id: 1, nombre: "Jean Garibay", email: "jean.garibay@example.com" },
    { id: 2, nombre: "Luis Cabra", email: "luis.cabra@example.com" }
  ]);
});

app.get("/productos", (req, res) => {
    res.json([
      { id: 1, nombre: "Monitor", marca: "Asus" },
      { id: 2, nombre: "Teclado", marca: "Gigabyte" }
    ]);
  });

// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
