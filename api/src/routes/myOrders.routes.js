const { Router } = require('express');
const User = require('../models/User');
const passport = require('passport');

const router = Router();

router.get('/myorders', (req, res, next) => {
    res.send('myorders');
    
});

module.exports = router;