const { validationResult } = require('express-validator')

const obtenerVista = (req,res) =>{
    res.render('Register')
}

const procesarForm = (req,res) =>{
    const register  = req.body 
    const errors = validationResult(req)
    console.log(errors);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
    console.log(register);

    
    return res.render('home')
}

module.exports = { obtenerVista, procesarForm }