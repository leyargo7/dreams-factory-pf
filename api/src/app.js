const express = require('express');
const morgan = require('morgan')
const app = express();
const routes = require("./routes");

//settings
app.set('port', process.env.PORT || 3001);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));


//routes
app.use(routes)

module.exports = app;