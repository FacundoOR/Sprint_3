const express = require('express')
const app = express()
const path = require('path')
const PORT = 3000
const cookieParser = require('cookie-parser')
const sessions = require('express-session')
const time = 1000 * 60 * 15;


const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

app.use(sessions({
    secret: "123456",
    saveUninitialized: true,
    cookie: {maxAge: time},
    resave: false 
}));
app.use(cookieParser());

app.set('view engine', 'ejs')
app.set("views", __dirname + '/views')
app.use(express.static(__dirname + '/public'))

app.use('/', require("./routes/Home"))
app.use('/', require("./routes/Detail_products"))
app.use('/', require("./routes/Login"))
app.use('/', require("./routes/Register"))
app.use('/', require("./routes/Cart"))

app.use(function(err,req,res,next){
    return res.json({
        error: err.message
    })
})

app.listen(PORT, () => console.log('listening on port', PORT))
