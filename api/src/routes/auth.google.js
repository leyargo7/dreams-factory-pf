const { Router } = require('express');

const passport = require('passport');

const router = Router();

router.get('/google', passport.authenticate('google', { scope: ['profile']}));

router.get('/google')


module.exports = router;