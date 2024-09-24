const express = require('express');
const cors = require('cors');
const multer = require('multer');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
require('body-parser-xml')(bodyParser);

const app = express();
const upload = multer();

app.use(cors()); // Middleware de Terceros
app.use(express.json()); // Middleware Incorporado
app.use(express.urlencoded({ extended: true })); // Middleware para parsear un formulario URLEncoded
app.use(upload.none()); // middleware para parsear un form data
app.use(bodyParser.xml());

const port = 3001;

// Conexión a MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'personabd'
});

// Verificar la conexión
connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conexión exitosa a la base de datos');
});

// Importar rutas
const clientesRoutes = require('./routes/clientes');

// Usar las rutas
app.use('/clientes', clientesRoutes);

app.listen(port, () => {
    console.log(`La aplicación está en línea en el puerto ${port}`);
});
