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

app.get('/signup', (req, res) => {
    res.render('signup')
})

app.get('/userPage', (req, res) => {
    res.render('userPage')
})

app.get('/hotelResults', (req, res) => {
    // res.render('hotelResults', results)
})

app.get('/hotelModal', (req, res) => {
    res.render('/hotelModal')
})

app.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password
    // res.render('/userPage', data)
})

app.post('/signup', (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const username = req.body.username
    const password = req.body.password
    // res.render('/userPage')
})

app.post('/userPage', (req, res) => {
    const search = req.body.search
})

app.post('/hotelResults', (req, res) => {
    const search = req.body.search
    const filter = req.body.filter
})

app.listen(PORT, () => {
    console.log(`Server ready on port ${PORT}.`)
})

