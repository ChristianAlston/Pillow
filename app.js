const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const session = require('express-session')
const passport = require('passport')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')
const PORT = 3000

app.use(express.static('styles'))
app.use(express.static('images'))


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))



app.get('/', (req, res) => {
    res.render('index')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.listen(PORT, () => {
    console.log(`Server ready on port ${PORT}.`)
})

