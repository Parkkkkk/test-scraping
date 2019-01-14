const local = require('./localStrategy');
const { User } = require('../models');

module.exports = (passport) => {
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });



    passport.deserializeUser((id, done) =>  {
        User.findOne(id, (err, user) => {
          done(err, user);
        });
      }); 

    local(passport);
};
