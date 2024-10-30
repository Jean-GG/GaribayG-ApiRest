require('dotenv').config(); // Cargar variables de entorno
const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '3600';

// Datos de ejemplo de usuario (esto debería ser reemplazado con una base de datos en producción)
const users = [
  { id: 1, username: 'usuario1', password: 'password1' },
  { id: 2, username: 'usuario2', password: 'password2' }
];

// Función para generar un JWT
const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, username: user.username },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );
};

// Middleware para verificar el token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ error: 'Token requerido' });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Token inválido' });
    req.user = user;
    next();
  });
};

// Endpoint de autenticación
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return res.status(401).json({ error: 'Credenciales inválidas' });

  const token = generateToken(user);
  res.json({ token });
});

// Ruta protegida
app.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'Acceso permitido a ruta protegida', user: req.user });
});

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
