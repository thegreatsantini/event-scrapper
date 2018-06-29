var request = require('request');
var cheerio = require('cheerio');
const puppeteer = require('puppeteer');



request('https://www.eventbrite.com/d/wa--seattle/events--this-weekend/?place_id=101730401&internal_ref=login', function (error, response, html) {
    if ( response.statusCode === 403 ) {
        return ('Need Captcha to view this site.')
    }
    console.log(response.statusCode)
    if (!error && response.statusCode === 200) {
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

request('https://www.meetup.com/#', function (error, response, html) {
    console.log(response.statusCode)
    if (!error && response.statusCode === 200) {
        const $ = cheerio.load(html);
        let parsedResults = [];
        const card = $('.card').html()
        console.log(card)
        $('.searchResults').each(function(){
            const a = $(this)
            console.log(a.text())
        });
        // $('.date-indicator').each(function(i, element){
        //     let b = $(this)
        //     console.log(b.text())
        // })
        // $('.chunk').each(function(i , element){
        //     const a = $(this).text()
        //     console.log(a)
        // });
    }
})


// request('https://news.ycombinator.com', function (error, response, html) {
//     if (!error && response.statusCode === 200) {
//         var $ = cheerio.load(html);
//         var parsedResults = [];
//         $('span.comhead').each(function (i, element) {
//             // Select the previous element
//             var a = $(this).prev();
//             // Get the rank by parsing the element two levels above the "a" element
//             var rank = a.parent().parent().text();
//             // Parse the link title
//             var title = a.text();
//             // Parse the href attribute from the "a" element
//             var url = a.attr('href');
//             // Get the subtext children from the next row in the HTML table.
//             var subtext = a.parent().parent().next().children('.subtext').children();
//             // Extract the relevant data from the children
//             var points = $(subtext).eq(0).text();
//             var username = $(subtext).eq(1).text();
//             var comments = $(subtext).eq(2).text();
//             // Our parsed meta data object
//             var metadata = {
//                 rank: parseInt(rank),
//                 title: title,
//                 url: url,
//                 points: parseInt(points),
//                 username: username,
//                 comments: parseInt(comments)
//             };

//             // Push meta-data into parsedResults array
//             parsedResults.push(metadata);
//         });
//         // Log our finished parse results in the terminal
//         console.log(parsedResults);
//     }
// });