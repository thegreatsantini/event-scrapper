const express = require("express");
const indexRoute = express.Router();
const request = require('request');
const cheerio = require('cheerio');
const phantom = require('phantom')

indexRoute.get("/", function (req, res) {
    res.status(200).send('landing page');
});

indexRoute.get('/api/v1/stanford', function (req, res) {
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

indexRoute.get('/api/v1/eventbright', function (req, res) {
    let data = [];
    request('https://www.eventbrite.com/d/wa--seattle/events--this-weekend/?place_id=101730401&internal_ref=login', function (error, response, html) {
        if (response.statusCode === 403) {
            res.status(403).send('403 error')
        }
    })
})

indexRoute.get('/api/v1/meetup', function(req, res){
    let pageData = []
    let getData = (async function () {
        const instance = await phantom.create();
        const page = await instance.createPage();
    
        const status = await page.open('https://www.meetup.com/');
        const content = await page.property('content');
        await instance.exit();
        return content;
    })().then( (data) => {
        let slicedData = data.slice(0,15)
        pageData.push(slicedData)
        return data
    }).then(() => {
        res.status(200).send(pageData)
    })
})

module.exports = indexRoute;