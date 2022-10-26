const express = require ('express')
const detailController = require('../controllers/Detail_products')
const app = express.Router()

app.get('/detalle-producto', detailController.obtenerVista)

module.exports = app 