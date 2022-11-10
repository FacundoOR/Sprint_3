const express = require('express')
const registerController = require('../controllers/Register')
const { body } = require('express-validator')
const app = express.Router()

app.get('/registrarme', registerController.obtenerVista)
app.post('/registrarme',
    body('nombre', 'Ingrese su nombre')
        .exists()
        .isAlpha()
        .isLength({ min: 2 }),
    body('apellido', 'Ingrese su apellido')
        .exists()
        .isAlpha()
        .isLength({ min: 2 }),
    body('email', 'Ingrese un email valido')
        .exists()
        .isEmail(),
    body('fecha_nac', 'Ingrese una fecha valida')
        .exists()
        .isDate(),
    body('pass','Ingrese una contraseña valida')
        .exists()
        .isAlphanumeric()
        .isLength({min : 5}),
        registerController.procesarForm);

module.exports = app 