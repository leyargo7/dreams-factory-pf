const passport = require('passport')
const User = require('../models/User')
const GoogleStrategy = require('passport-google-oauth20').Strategy


const GOOGLE_CLIENT_ID = "755120732234-46fdpjsrrmn6eg7in0akm5rgav00p1ec.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3001/api/auth/google/callback"
    },
    function(accessToken, refreshToken, profile, done) {
        //done(null, profile)
        // const user = new User({
            
        //     name: profile.displayName,
        //     email: profile.emails[0].value,
            
        // })
        // user.save()
        
    }
))

passport.serializeUser((user, done) => {
    done(null, user)

})
passport.deserializeUser((user, done) => {
    done(null, user)
})