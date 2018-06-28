const express = require("express");
const indexRoute = express.Router();
const bodyParser = require('body-parser');
const request = require('request');
const cheerio = require('cheerio');



// user model
// const db = require('../models/user');
// const SavedRecipe = require('../models/savedRecipes')

indexRoute.get("/", function (req, res) {
    res.render('index');
});

indexRoute.get('/api/stanford', function (req, res) {
    request('http://events.stanford.edu/', function (error, response, html) {
        let data = []
        if (!error && response.statusCode === 200) {
            const $ = cheerio.load(html);
            $('.postcard-text').each(function (i, element) {
                const a = $(this)
                const metaData = {}
                metaData.image = $('img').eq(1).text();
                metaData.title = $('h3').eq(i).text();
                metaData.meetingTime = $('p').eq(i + 1).text();
                data.push(metaData);
            });
        }
        res.status(200).send(data)
    });
})

indexRoute.get('/api/eventbright', function(req, res) {
    let data = [];
    request('https://www.eventbrite.com/d/wa--seattle/events--this-weekend/?place_id=101730401&internal_ref=login', function (error, response, html) {
    if ( response.statusCode === 403 ) {
        res.status(403).send('403 error')
    }

    else if (!error && response.statusCode === 200) {
        const $ = cheerio.load(html);
        let parsedResults = [];
        console.log('im here')
        const thing = $('.eds-media-card-content__content__principal');
        console.log(thing)
        // $('.eds-media-card-content__content__principal').each(function (i, element) {
        //     var a = $(this);
        //     console.log(a.text());
        // });
        }
    })
})

module.exports = indexRoute;