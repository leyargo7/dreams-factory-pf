const express = require('express');
const morgan = require('morgan')
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser')
const passport = require('passport')
const app = express();
const cors = require('cors');
const paymentRoutes = require("./routes/payment");
const notificationRoutes = require("./routes/notifications");
const productRoutes = require('./routes/products.routes')
const categoryRoutes = require('./routes/categories.routes')
const api = require('./routes/api.routes')

require('./config/mongoose');
require('./config/passport');
require('./config/passportGoogle');

const register = require('./routes/register.routes')
const login = require('./routes/login.routes')
const ordersRoutes = require('./routes/myOrders.routes')
const googleUser = require('./routes/loginGoogle.routes')
const userAuth = require('./routes/user.routes')

//settings
app.set('port', process.env.PORT || 3001);

//middlewares

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors( {origin: 'http://localhost:3000', credentials: true})) 

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
app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({
  name: 'session',
  //sameSite: 'none',
  maxAge: 24 * 60 * 60 * 1000,
  keys: ['secret']

}))
app.use(passport.initialize());
app.use(passport.session());

//routes
app.use('/api', register)
app.use('/api', login)
app.use('/api', productRoutes)
app.use('/api', categoryRoutes)
app.use('/api', ordersRoutes)
app.use('/api', paymentRoutes)
app.use('/api', notificationRoutes)
app.use(api)
app.use('/api/v1', googleUser)
app.use('/api/v1', userAuth)

module.exports = app;