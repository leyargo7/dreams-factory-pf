const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/User");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `${FRONT_URL}/api/v1/auth/google/callback`,
      passReqToCallback: true,
    },
    async (req, accessToken, refreshToken, profile, cb) => {
        const defaultUser = {
            name: profile.displayName,
            email: profile.emails[0].value,
            username : profile.emails[0].value,
            password: profile.id,
        };

        const user = await User.findOne({ email: defaultUser.email }).catch((err) => {
            console.log("Error signing up", err);
            cb(err, null);
        });
        if(user){
            // console.log("User already exists", user)
            cb(null, user)
        }else{
            const newUser = new User(defaultUser);
            newUser.save().then((user) => {
                // console.log("User created", user)
                cb(null, user)
            });
        }

        
    }
  )
);

passport.serializeUser((user, cb) => {
    //console.log("serializeUser", user)
    cb(null, user.email);
});

passport.deserializeUser( async(email, cb) => {
    const user = await User.findOne({ email: email }).catch((err) => {
        //console.log("Error signing up", err);
        cb(err, null);
    });
    //console.log("deserializeUser", user)

    if(user) cb(null, user);
});
