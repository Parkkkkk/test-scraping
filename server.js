const express = require('express');
const api = require('./router/scraping');
const passport = require('passport');
const { sequelize } = require('./models');
const passportConfig = require('./passport');

const app = express();
sequelize.sync();

passportConfig(passport);

const PORT = process.env.PORT || 3030;

app.use(passport.initialize());
app.use('/api', api);


app.listen(PORT, () => {
    console.log(`Check out the app at http://localhost:${PORT}`);
});
