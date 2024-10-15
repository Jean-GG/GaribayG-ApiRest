const express = require('express')
//const cors = require('cors');

const app = express()

//app.use(cors())

const port = 3001

const { validationResult } = require('express-validator'); 
const  validadores = require('./validacion.js');      
app.use(express.json()); 
app.post("/usuario",validadores.validaUsuario(),(req,res)=>{ 
const result = validationResult(req); 
});


app.listen(port,() => {
    console.log('La aplicacion esta en linea');
})