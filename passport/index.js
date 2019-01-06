const local = require('./localStrategy');
const { User } = require('../models');

module.exports = (passport) => {
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id , done) => {
        User.findOne({
            where:{ id },
            include : [{
                model : User,
                attributes : [ 'email' , 'nick' ]
            }]
        })
        .then(user => done(null, user))
        .then(err => done(err))
    });
    local(passport);
};