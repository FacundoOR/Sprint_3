const express = require('express')
const app = express()
const PORT = 3000

app.listen(PORT, () => console.log('listening on port', PORT))

app.get('/',(req, res)=> {
    res.send('Estoy en el Home')
})
app.get('/detalle-producto',(req, res)=> {
    res.send('Estoy en el Detail')
})
app.get('/inicio-sesion',(req, res)=> {
    res.send('Estoy en el Inicio de sesion')
})
app.get('/registrarme',(req, res)=> {
    res.send('Estoy en el Registro')
})
app.get('/carrito',(req, res)=> {
    res.send('Estoy en el Carro')
})