const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/User");

const GOOGLE_CLIENT_ID = "1077078691505-ijbt6e7ap9roj4447qgs3oqc84lkggt9.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: `https://dreams-factory-pf-production.up.railway.app/api/v1/auth/google/callback`,
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
