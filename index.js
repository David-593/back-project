//crear servidor con bd
const express = require('express');
const morgan = require('morgan');

//creacion de rutas para el proyecto y esta importado de ua ruta
const aplicacionRutas = require ('./rutas/app.rutas')
const app = express();
const cors = require ('cors');

app.use(cors());

app.use(morgan());

app.use(express.json());

app.use(aplicacionRutas.rutas.js); //al poner esto podremos usar las rutas en nustra web

app.use((err, req, res, next) =>{
    return res.json({message: err.message})
});

app.listen(3000)
console.log('server on port 3000')