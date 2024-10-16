const express = require('express')
const app = express()
const port = 3001
const { body, validationResult } = require('express-validator');


app.use(express.json());// Middleware para parsear JSON en el body de las solicitudes

app.post('/registro', 
  // Validacion
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
    const errors = validationResult(req);// Aqui guarda los mensajes de error

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });// Si hay errores se devuelve un mensaje de error
    }

    res.send('Datos validados correctamente');// Si no hay errores seguira su curso normal
  }
);

app.listen(port, () => {
  console.log('Servidor iniciado en http://localhost:3001');
});





