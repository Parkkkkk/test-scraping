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
        return console.log('이미 존재하는 유저입니다');
      }
      const hash = await bcrypt.hash(password, 12);
      await User.create({
        email,
        nick,
        password: hash,
      });
      return res.json({status : user.email});
    } catch (error) {
      return res.send(error);
    }
  });
  
//login User
router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { 
      return res.send(err); 
    }
    if (!user) { 
      return res.send('false'); 
    }
    req.logIn(user, function(err) {
      if (err) { 
        return next(err); 
      }
      return res.json({ email : user.email , nick : user.nick});
    });
  })(req, res, next);
});

//logout User
router.get('/logout' , (req, res) => {
    req.logout();
    req.session.destroy();
    res.send('success');
});


module.exports = router;
