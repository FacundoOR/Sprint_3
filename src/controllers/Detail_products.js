const { readProducts, readProduct } = require("../service/productos")

const obtenerVista = (req,res) =>{
    res.render('Detail_products')
}

const getAll = (req, res) =>{
    const products = readProducts();
    return res.render('Home', {products})
}

const getOne = (req, res) =>{
    const {id} =req.params
    const product = readProduct(id)
    if(!product){
        return res.status(500).json({
            status: "hubo un error",
            message: "no se encontro el producto"
        })
    }
    return res.render('Detail_products', {product})
}

module.exports =  { obtenerVista, getAll, getOne } 