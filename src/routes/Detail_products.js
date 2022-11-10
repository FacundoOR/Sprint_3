const express = require ('express')
const {getOne} = require('../controllers/Detail_products')
const app = express.Router()

//app.get('/detalle-producto', detailController.obtenerVista)
app.get('/detalle-producto/:id', getOne)

module.exports = app 