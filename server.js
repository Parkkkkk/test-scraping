const express = require('express');
const request = require('request');
const cheerio = require('cheerio');



const app = express();
const PORT = process.env.PORT || 3030;
const url = "";

const data = [];

app.get('/api/scraping' , (req, res, next) => {
    request(url, (error,response,html) => {
        if(!error && response.statusCode == 200) {
         const $ = cheerio.load(html);

         $('.ckc').each((i, el) => {
            
             var id = parseInt(i + 1); 

             //해당 item url crawling
             var item = $(el)
             .find('.box a')
             .attr('href');

             //image crawling
             var image = $(el)
             .find('.sum img')
             .attr('src');

             data[i] = 
                 {
                     id : id,
                     item : `${url}${item}`,
                     image : image
                 };
                })
            console.log(data);
            res.json(data);
        } else {
            console.log('fail');
        }
    })
})


app.listen(PORT, () => {
    console.log(`Check out the app at http://localhost:${PORT}`);
});
