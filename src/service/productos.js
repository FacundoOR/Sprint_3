const fs = require('fs')

const readProducts = () => {
    const products = fs.readFileSync(__dirname + '/../database.json')   
    return JSON.parse(products)
}

const readProduct = (id) => {
    const products = readProducts()
    const product = products.filter((p) => p.id == id) 
    return product
}

module.exports = { readProducts, readProduct }