const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const port = 3000;
const secretKey = "secret";

app.use(express.json());

app.post("/login", (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    if (!username || !password) {
      return res.status(400).json({ message: "Usuario y contraseña son requeridos" });
    }
    if (username === "admin" && password === "123") {
      const token = jwt.sign({ username }, secretKey, { expiresIn: "1h" });
      return res.status(200).json({ token });
    } else {
      return res.status(401).json({ message: "Fallo en la autenticacion" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
});

function verifyToken(req, res, next) {
  const header = req.header("Authorization") || "";
  const token = header.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Se necesita un token" });
  }
  try {
    const payload = jwt.verify(token, secretKey);
    req.username = payload.username;
    next();
  } catch (error) {
    return res.status(403).json({ message: "Token no valido" });
  }
}

app.get("/protected", verifyToken, (req, res) => {
  return res.status(200).json({ message: "Tienes acceso", user: req.username });
});

app.listen(port, () => {
  console.log(`Server listen on http://localhost:${port}`);
});