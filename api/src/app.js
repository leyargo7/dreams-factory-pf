const express = require('express');
const morgan = require('morgan')
const app = express();
const paymentRoutes = require("./routes/payment");
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

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, DELETE"
    );
    next();
});

//routes
app.use('/api', productRoutes)
app.use('/api', categoryRoutes)
app.use('/api', paymentRoutes)
app.use(api)

module.exports = app;