const express = require('express')
//const cors = require('cors');

const app = express()

//app.use(cors())

const port = 3001

app.get('/',(req,res)=> {
    if (XYZ) {
        res.send({
            data:'Hola mundo'
        })
    } else {
        res.send({
            data:'Hola mundo'
        })
    }
    next(err);
})

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500);
    res.json({error:err.message});
});


app.listen(port,() => {
    console.log('La aplicacion esta en linea');
})