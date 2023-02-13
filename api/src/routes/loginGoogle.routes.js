const { Router } = require("express");
const passport = require("passport");

const User = require("../models/User");
const router = Router();

const home = `${process.env.FRONT_URL}`;
const successLoginUrl = `${process.env.FRONT_URL}/login/success`;
const errorLoginUrl = `${process.env.FRONT_URL}/login/error`;


router.get("/login/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get("/auth/google/callback", passport.authenticate("google", { 
  failureMessage: "Cannot login to Google, please try again later!", 
  failureRedirect: errorLoginUrl,
  successRedirect: successLoginUrl
  }),
  (req, res) => {
    console.log("User", req.user)
    res.send("Thanks you for signing in!")
  }
);

router.get("/logout", (req, res) => {
  req.logout();
  req.session = null;
  res.redirect(home);
});


module.exports = router;
