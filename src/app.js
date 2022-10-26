const express = require('express')
const app = express()
const path = require('path')
const PORT = 3000

app.set('view engine', 'ejs')
app.set("views", __dirname + '/views')
app.use(express.static(__dirname + '/public'))

app.use('/', require("./routes/Home"))
app.use('/', require("./routes/Detail_products"))
app.use('/', require("./routes/Login"))
app.use('/', require("./routes/Register"))
app.use('/', require("./routes/Cart"))

app.listen(PORT, () => console.log('listening on port', PORT))
