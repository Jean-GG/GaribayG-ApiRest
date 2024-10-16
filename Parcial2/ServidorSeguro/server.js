const express = require('express')
const app = express()
const port = 3001
const { body, validationResult } = require('express-validator');

const https = require('https');
const fs = require('fs');
const path = require('path');

const options = {
  key: fs.readFileSync(path.join(__dirname, 'ssl/key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'ssl/cert.pem')),
};

app.use(express.json());

app.post('/registro',
  [
    body('username')
      .trim()
      .isLength({ min: 3 })
      .withMessage('El nombre de usuario debe tener al menos 3 caracteres')
      .escape(),
    body('email')
      .isEmail()
      .withMessage('Debe proporcionar un correo electrónico válido')
      .normalizeEmail(),
    body('password')
      .isLength({ min: 6 })
      .withMessage('La contraseña debe tener al menos 6 caracteres')
      .matches(/\d/)
      .withMessage('La contraseña debe contener al menos un número')
  ],
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    res.send('Datos validados correctamente');
  }
);

https.createServer(options, app).listen(port, () => {  //Sustituyr el listen
  console.log("Servidor Express escuchando en 3001");
})

/*
Ejemplo
{ 
  "username": "JeanGaribay",
  "email": "Jean@gmail.com",
  "password": "password123"
}

*/
