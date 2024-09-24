const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

// Conexión a MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'personabd'
});

// Obtener clientes
router.get('/', (req, res) => {
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

// Crear cliente
router.post('/', (req, res) => {
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

// Eliminar cliente
router.delete('/', (req, res) => {
    const id = req.query.id;

    // Validación de que ocupa un id
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

module.exports = router;
