const express = require ('express')
const homeController = require('../controllers/Home')
const app = express.Router()

app.get('/', homeController.obtenerVista)

module.exports = app 