const express = require ('express')
const { getAll } = require('../controllers/Detail_products')
const homeController = require('../controllers/Home')
const app = express.Router()

//app.get('/', homeController.obtenerVista)
app.get('/Home', getAll)

module.exports = app 