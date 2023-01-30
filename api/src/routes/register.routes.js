const { Router } = require('express');
const User = require('../models/User');
const passport = require('passport');
const router = Router();


router.post('/registeruser', (req, res, next) => {
    passport.authenticate('register', (err, user, info) => {        
        if(err){
            res.send(err);
            
        }
        if(info !== undefined){
            res.send(info.message);
        }else{
            req.logIn(user, err => {
                const data = {
                    name: req.body.name,
                    address: req.body.address,
                    email: req.body.email,
                    username: user.username,

                }
                User.findOne({
                    username: data.username,
                }).then(user => {
                    user.updateOne({
                        name: data.name,
                        address: data.address,
                        email: data.email,
                    }).then(() => console.log('User created in db'));
                    res.status(200).send({ message: 'user created' });
                });
            });
        }
    })(req, res, next)
});

module.exports = router;