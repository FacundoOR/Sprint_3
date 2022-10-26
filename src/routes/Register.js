const express = require ('express')
const registerController = require('../controllers/Register')
const app = express.Router()

app.get('/registrarme', registerController.obtenerVista)

module.exports = app 