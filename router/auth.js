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
router.post('/login', passport.authenticate('local'), (req, res) => {
    const user_info = {
      email : req.user.email,
      nick : req.user.nick
    }
    return res.json(user_info);
  });

//logout User
router.get('/logout' , (req, res) => {
    req.logout();
    req.session.destroy();
    res.send('success');
});


module.exports = router;
