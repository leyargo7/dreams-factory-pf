const bcrypt = require("bcrypt");
const jwtSecret = require("./jwtConfig");

const BCRYPT_SALT_ROUNDS = 10;

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const User = require('../models/User');

passport.use(
    "register",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true,
        session: false,
      },
      (req, username, password, done) => {
        try {
          User.findOne({
            username: username,
            email: req.body.email,
          }).then((user) => {
            if (user != null) {
                //console.log("username or email already taken");
                    
              return done(null, false, {
                message: "email already taken",
              });
            }

            if(req.body.name == null || req.body.name == ""){
                return done(null, false, {
                    message: "name is required",
                  });
            }
            if(req.body.address == null || req.body.address == ""){
                return done(null, false, {
                    message: "address is required",
                  });
            }
            
            bcrypt.hash(password, BCRYPT_SALT_ROUNDS).then((hashedPassword) => {
              User.create({
                username,
                password: hashedPassword,
                email: req.body.email,
                name: req.body.name,
                address: req.body.address,

              }).then((user) => {
                console.log("user created");
                return done(null, user);
              });
            }); 
          });
        } catch (err) {
          return done(err);
        }
      }
    )
  );

  passport.use(
    "login",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        session: false,
      },
      (username, password, done) => {
        try {
          User.findOne({
            username: username,
          }).then((user) => {
            if (user === null) {
              return done(null, false, {
                message: "wrong email or password",
              });
            }
            bcrypt.compare(password, user.password).then((response) => {
              if (response !== true) {
                //console.log("passwords do not match");
                return done(null, false, {
                  message: "wrong email or password",
                });
              }
              //console.log("user found & authenticated");
              return done(null, user);
            });
          });
        } catch (err) {
          done(err);
        }
      }
    )
  );
  
  const opts = {
      //jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("JWT"),
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtSecret.secret,
    };
  
  passport.use(
      'jwt',
      new JwtStrategy(opts, (jwt_payload, done) => {
        
          try {
              User.findOne({
                  _id: jwt_payload.id,
                    
              }).then((data) => {
                  if (data) {
                      done(null, data);
                  } else {
                      console.log('user not found in db');
                      done(null, false);
                  }
              })
          } catch (err) {
              done(err);
          }
      })
  )