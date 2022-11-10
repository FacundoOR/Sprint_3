const fs = require('fs')

const readUsers = () => {
    const usuarios = fs.readFileSync(__dirname + '/../users.json')
    
    return JSON.parse(usuarios)
}


module.exports = { readUsers }