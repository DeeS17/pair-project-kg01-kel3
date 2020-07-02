const express = require('express');
const app = express()
const session = require('express-session');
const path = require('path')
const nodemailer = require('nodemailer')



app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'test',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 3600000
    }
}))


const routesIndex = require('./routes/index');
app.use('/', routesIndex);



const PORT = 3000;

app.listen(PORT, () => console.log(`express on! in port ${PORT}`))