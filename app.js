const express = require('express');
const app = express()

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));

const routesIndex = require('./routes/index');

app.use('/', routesIndex);

const PORT = 3000;

app.listen(PORT, ()=> console.log(`express on! in port ${PORT}`))