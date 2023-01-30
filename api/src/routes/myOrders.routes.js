const { Router } = require('express');
const User = require('../models/User');
const passport = require('passport');

const router = Router();

router.get('/myorders', (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (err, data, info) => {
       
        if(err) {
            console.log(err);
        }if(info !== undefined) {
            console.log(info.message);
            res.status(401).send('Authentication Error! ' + info.message);
        }else if(data.username === req.query.username) {
            res.json({
                message: 'Order placed',
                myorders: [
                    {
                        id: 1,
                        name: 'Pizza',
                        price: 100,
                    },
                    {
                        id: 2,
                        name: 'Burger',
                        price: 50,
                    }
                ],
            });
        }else{
      
            res.status(403).send('You are not authorized, login to continue!');
        }
    })(req, res, next);
    
});

module.exports = router;