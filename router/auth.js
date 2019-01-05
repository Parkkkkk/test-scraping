const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const { User } = require('../models');

const router = express.Router();


// roll in User 

router.post('/join', async (req, res, next) => {
    const { email, nick, password } = req.body;
    try {
      const exUser = await User.findOne({ where: { email } });
      if (exUser) {
        console.log('이미 존재하는 유저입니다');
      }
      const hash = await bcrypt.hash(password, 12);
      await User.create({
        email,
        nick,
        password: hash,
      });
      return res.send(email, nick);
    } catch (error) {
      console.error(error);
      return next(error);
    }
  });
  
//login User
router.post('/login', (req, res, next) => { 
  passport.authenticate('local', ( user ) => {
    return req.login(user, (loginError) => {
      if (loginError) {
        console.error(loginError);
        return res.send(loginError);
      }
      return res.json(user);
    });
  })(req, res, next); });

//logout User
router.get('/logout' , (req, res) => {
    req.logout();
    req.session.destroy();
    res.redirect('/');
});

router.get('/profile', async (req, res) => {
    const user = await User.findOne({ where : req.user })
    return res.json(user);
})


module.exports = router;
