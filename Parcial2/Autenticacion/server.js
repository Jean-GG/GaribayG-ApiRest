const express = require('express')
const cors = require('cors');
const basicAuth = require('express-basic-auth');
const app = express() 

app.use(cors()) //Middleware de Terceros

app.use(express.json()); //Middleware Incorporado

const port = 3001

app.use(basicAuth({
    users: { 'admin': 'supersecret' }
}))

app.get('/clientes/:id',cors(),(req,res)=> {
    console.log(req.params)
    res.json({mensaje:'Server Express contestando a peticion GET'})
})

app.post('/clientes',(req,res)=>{
    console.log(req.query)
    res.json({mensaje:'Server Express contestando a peticion POST'})
})

app.put('/clientes',(req,res)=>{
    console.log(req.body)
    res.json({mensaje:'Server Express contestando a peticion PUT'})
})

app.listen(port,() => {
    console.log('La aplicacion esta en linea');
})


