const express = require('express')
const cartControllers = require('../controllers/Carts')
const app = express.Router()

app.get('/carrito', cartControllers.obtenerVista)

module.exports = app