const express = require('express');
const app = express();

app.get('/inicio', (req, res) => {
  res.json({ message: 'Hola, Mundo!' });
});

module.exports = app;
