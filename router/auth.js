const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const { User } = require('../models')

const router = express.Router();


// roll in User 
router.post('/join', async (req, res, next) => {
    const { email, nick , password } = req.body;
    try {
        const exUser = await User.find({ where : email });
        if ( exUser ) {
            return res.redirect('/');
        } 
        const hash = bcrypt.hash( password, 12);
        await User.creat({
            email,
            nick,
            password : hash,
        });
        res.redirect('/');
    } catch (error) {
        console.error(error);
        return next(error);
    }
})



//login User
router.post('/login',
    passport.authenticate('local' , { failureRedirect : '/login'})) , async (req, res) => {
        res.redirect('/');
    }


//logout User
router.get('/logout' , (req, res) => {
    req.logout();
    req.session.destroy();
    res.redirect('/');
});

router.get('/profile', async (req, res) => {
    const user = await User.find({ where : req.user })
    return res.json(user);
})


module.exports = router;
