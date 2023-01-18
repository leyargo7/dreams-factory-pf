const express = require('express');
const morgan = require('morgan')
const app = express();

const productRoutes = require('./routes/products.routes')
const categoryRoutes = require('./routes/categories.routes')
const api = require('./routes/api.routes')

require('./config/mongoose');

//settings
app.set('port', process.env.PORT || 3001);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


//routes
app.use('/api', productRoutes)
app.use('/api', categoryRoutes)
app.use(api)



module.exports = app;