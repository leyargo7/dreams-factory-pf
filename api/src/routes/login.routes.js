const { Router } = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const jwtSecret = require('../config/jwtConfig');

const router = Router();

router.post('/loginuser', (req, res, next) => {
    passport.authenticate('login', (err, users, info) => {
        //console.log('user: ', users);
        if(err) {
            console.error(`Error ${err}`);
        }
        if(info !== undefined) {
            console.error(info.message);
            if(info.message === 'wrong email or password') {
                res.status(401).send(info.message);
            }else{
                res.status(403).send(info.message);
            }
        }else{
            req.logIn(users, () => {
                User.findOne({
                    username: req.body.username,
                }).then((user) => {
                    const token = jwt.sign({ id: users.id }, jwtSecret.secret, {
                        expiresIn: 600,
                    });
                    res.status(200).send({
                        auth: true,
                        token,
                        message: 'user found & logged in',
                    });

                });
            });
        }
    })(req, res, next);
});


module.exports = router;