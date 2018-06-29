var request = require('request');
// var express = require('express');
// var router = express.Router();
let phantom = require('phantom');
let cheerio = require('cheerio');

/* GET users listing. */

//This is the important bit
let getData = async function () {
    const instance = await phantom.create();
    const page = await instance.createPage();
    await page.on('onResourceRequested',

        function (requestData) {
            console.info('Requesting', requestData.url);
        });

    const status = await page.open('https://www.meetup.com/');
    const content = await page.property('content');
    console.log(content);
    await instance.exit();
    return content;
};

//calls the functionq and console.logs the data
getData()
// you can use this data with cheerio and make the appropriate selections, loop through and so on

// request('https://www.meetup.com/#', function (error, response, html) {
//     console.log(response.statusCode)
//     if (!error && response.statusCode === 200) {
//         const $ = cheerio.load(html);
//         let parsedResults = [];
//         const card = $('.card').html()
//         console.log(card)
//         $('.searchResults').each(function () {
//             const a = $(this)
//             console.log(a.text())
//         });
        // $('.date-indicator').each(function(i, element){
        //     let b = $(this)
        //     console.log(b.text())
        // })
        // $('.chunk').each(function(i , element){
        //     const a = $(this).text()
        //     console.log(a)
        // });
    // }
// })


