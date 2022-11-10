const { validationResult } = require('express-validator');
const { readUsers } = require('../service/usuarios');
const bcrypt = require('bcrypt');
const session = require('express-session');


const obtenerVista = (req,res) =>{
    res.render('Login')
}
const procesarForm = (req,res) =>{
    const { user, pass}  = req.body 

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      
    const usuarios = readUsers()
    const username = usuarios.filter((u => u.username == user))[0]

    if(!username) return res.render('Error')
    
    const isValid = bcrypt.compareSync(pass, username.password)
    if(!isValid) return res.render('Error')
    delete username.password;
    req.session.user = username
    console.log(req.session);
    return res.redirect('/home')
}

const home = (req, res) =>{
    const user = req.session.user
    return res.render('Home')
}

module.exports =  { obtenerVista, procesarForm, home } 