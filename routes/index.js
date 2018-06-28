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

indexRoute.get('/stanford', function (req, res) {
    request('http://events.stanford.edu/', function (error, response, html) {
        let data = []
        if (!error && response.statusCode == 200) {
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

module.exports = indexRoute;