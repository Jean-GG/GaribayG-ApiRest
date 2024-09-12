const express = require('express')
const cors = require('cors')
const multer = require('multer')
const bodyParser = require('body-parser');
const mysql = require('mysql2');
require('body-parser-xml')(bodyParser);

const app = express() 
const upload = multer()

app.use(cors()) // Middleware de Terceros

app.use(express.json()); // Middleware Incorporado

app.use(express.urlencoded({extended:true})); // Middleware para parsear un formulario URLEncoded
app.use(upload.none()) // middleware para parsear un form data
app.use(bodyParser.xml())

const port = 3001

//Conexión a MySQL
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

app.get('/clientes', (req, res) => {
    const id = req.query.id;
    let consulta = '';
    let params = [];

    if (id) {
        consulta = 'SELECT * FROM clientes WHERE id = ?';
        params = [id];
    } else {
        consulta = 'SELECT * FROM clientes';
    }

    connection.query(consulta, params, (err, results) => {
        if (err) {
            console.error('Error al realizar la consulta:', err);
            res.status(500).json({ error: 'Error en la base de datos' });
        } else {
            res.json(results);
        }
    });
});

app.post('/clientes', (req, res) => {
    const { nombre } = req.body;

    // Validación
    if (!nombre) {
        return res.status(400).json({ error: 'El campo nombre es obligatorio' });
    }

    const consulta = 'INSERT INTO clientes (nombre) VALUES (?)';

    connection.query(consulta, [nombre], (err, results) => {
        if (err) {
            console.error('Error al insertar datos:', err);
            return res.status(500).json({ error: 'Error en la base de datos' });
        }

        res.status(201).json({ mensaje: 'Cliente insertado con éxito', id: results.insertId });
    });
});


app.delete('/clientes', (req, res) => {
    const id = req.query.id;

    // Validacion de que ocupa un id
    if (!id) {
        return res.status(400).json({ error: 'El parámetro id es obligatorio' });
    }

    const consulta = 'DELETE FROM clientes WHERE id = ?';

    connection.query(consulta, [id], (err, results) => {
        if (err) {
            console.error('Error al eliminar el cliente:', err);
            res.status(500).json({ error: 'Error en la base de datos' });
        } else if (results.affectedRows === 0) {
            res.status(404).json({ mensaje: 'Cliente no encontrado' });
        } else {
            res.json({ mensaje: 'Cliente eliminado con éxito' });
        }
    });
});

app.listen(port, () => {
    console.log(`La aplicación está en línea en el puerto ${port}`);
});
