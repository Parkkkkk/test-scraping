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

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (authError, user, info) => {
    if (authError) {
      return res.send(authError);
    }
    if (!user) {
      return res.json({
        code : 400,
        message : info.message
      });
    }
      var user_info = {
        email : user.email,
        nick : user.nick
      }
      console.log(user_info);
      return res.json(user_info);
    
  })(req, res, next)}); 


//logout User
router.get('/logout' , (req, res) => {
    req.logout();
    req.session.destroy();
    return res.send('로그아웃 되었습니다.');
});


module.exports = router;
