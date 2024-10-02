const path = require('path');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const port = 3001;

app.get('/sendFile', (req, res) => {
    let archivo = path.join(__dirname, '/imagenes/homelo.jpg');
    res.sendFile(archivo, (err) => {
        if (err) {
            res.status(500).send('Error al enviar el archivo');
        }
    });
});

app.get('/download', (req, res) => {
    let archivo = path.join(__dirname, '/imagenes/homelo.jpg');
    res.download(archivo, (err) => {
        if (err) {
            res.status(500).send('Error al descargar el archivo');
        }
    });
});

app.get('/attachment', (req, res) => {
    let archivo = path.join(__dirname, '/imagenes/homelo.jpg');
    res.attachment(archivo);
    res.sendFile(archivo, (err) => {
        if (err) {
            res.status(500).send('Error al enviar el archivo adjunto');
        }
    });
});


app.listen(port, () => {
    console.log('La aplicación está en línea en el puerto', port);
});
