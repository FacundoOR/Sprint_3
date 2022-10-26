const express = require ('express')
const loginController = require('../controllers/Login')
const app = express.Router()

app.get('/inicio-sesion', loginController.obtenerVista)

module.exports = app 