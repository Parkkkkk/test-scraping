const express = require('express');
const api = require('./router/scraping');

const app = express();
const PORT = process.env.PORT || 3030;


app.use('/api', api);


app.listen(PORT, () => {
    console.log(`Check out the app at http://localhost:${PORT}`);
});
