const express = require('express');
const app = express();
const port = 3001;

app.set('view engine', 'pug'); // Config motor de vistas
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('index', { title: 'Hola, Mundo!', message: '¡Bienvenido a Express con Pug!' });
});

app.listen(port, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});
