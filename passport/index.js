const local = require('./localStrategy');

module.exports = (passport) => {
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id , done) => {
        User.find({
            where:{id}
        })
        .then(user => done(null, user))
        .then(err => done(err))
    });
    local(passport);
};