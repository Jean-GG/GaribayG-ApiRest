const express = require('express')
const cors = require('cors')
const multer = require('multer')
//var bodyParser = require('body-parser')
const bodyParser = require('body-parser');
require('body-parser-xml')(bodyParser);

const app = express() 
const upload = multer()

app.use(cors()) //Middleware de Terceros

app.use(express.json()); //Middleware Incorporado

app.use(express.urlencoded({extended:true})); //Middleware para parsear un formulario URLEncoded
app.use(upload.none()) //middleware para parseae un form data
app.use(bodyParser.xml())

const port = 3001


app.get('/clientes/:id',cors(),(req,res)=> {
    console.log(req.params)
    res.json({mensaje:'Server Express contestando a peticion GET'})
})

app.post('/clientes',(req,res)=>{
    console.log(req.body)
    res.json({mensaje:'Server Express contestando a peticion POST'})
})

app.put('/clientes',(req,res)=>{
    console.log(req.body)
    res.json({mensaje:'Server Express contestando a peticion PUT'})
})

app.listen(port,() => {
    console.log('La aplicacion esta en linea');
})


