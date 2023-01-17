const express = require('express');
const morgan = require('morgan')
const app = express();

//settings
app.set('port', process.env.PORT || 3001);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));


//routes

module.exports = app;