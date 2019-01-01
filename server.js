const express = require('express');
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const { sequelize } = require('./models');
const passportConfig = require('./passport');

const authRouter = require('./router/auth');
const apiRouter = require('./router/scraping');

const app = express();
sequelize.sync();

passportConfig(passport);

const PORT = process.env.PORT || 3030;

app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session ({
    resave : false,
    saveUninitialized : false,
    secret : process.env.COOKIE_SECRET,
    cookie : {
        httpOnly : true,
        secure : false,
    },
}));

app.use(passport.initialize());
app.use(passport.session());
app.use('/api', apiRouter);
app.use('/auth', authRouter);


app.listen(PORT, () => {
    console.log(`Check out the app at http://localhost:${PORT}`);
});
