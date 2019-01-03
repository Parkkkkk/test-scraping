const express = require('express');
const cheerio = require('cheerio');
const request = require('request');
require('dotenv').config();


//const url = process.env.URL;
const router = express.Router();
var data = [];


router.get('/scraping' , (req, res, next) => {
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

module.exports = router;

