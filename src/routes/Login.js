const express = require('express')
const loginController = require('../controllers/Login')
const { body } = require('express-validator')
const app = express.Router()

app.get('/inicio-sesion', loginController.obtenerVista)
app.post('/inicio-sesion',
    body('user')
        .exists().withMessage('Ingrese un Usuario valido'),
    body('pass')
        .exists().withMessage('Ingrese un password')
        .isLength({ min: 5 }).withMessage('La contraseña debe tener mas de 3 caracteres')
        .isAlphanumeric().withMessage('La contraseña debe ser Alfanumerica'),
   
     loginController.procesarForm);
app.get('/home', loginController.home)

module.exports = app 