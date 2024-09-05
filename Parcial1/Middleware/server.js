const express = require('express')
const cors = require('cors');
const app = express() 

app.use(cors()) //Middleware de Terceros

app.use((req,res,next)=>{ //Middleware de Aplicacion
    console.log(new Date());
    next();
})

app.use(express.json()); //Middleware Incorporado

const port = 3001

app.get('/',cors(),(req,res)=> {
    res.json({mensaje:'Server Express contestando a peticion GET'})
    next(error);
})

app.post('/',(req,res)=>{
    res.json({mensaje:'Server Express contestando a peticion POST'})
})

app.listen(port,() => {
    console.log('La aplicacion esta en linea');
})

app.use(function(err, req, res, next){
    res.status(500).send('Algo no ha ido bien:('); //Middleware de error
})