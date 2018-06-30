# Event Scrapper

### Run Server

1) clone repo
```git clone https://github.com/thegreatsantini/event-scrapper.git```

2) install dependencies
```npm i```


How far did you get?
I was able to implement most of the required functionality. My single-page web app successfully scrapes events.stanford.com, returning event data that I parse and display on screen. I designed and implemented tests that successfully test for: (1) a 200 status code, (2) receiving data, (3) receiving data as an array, and (4) if the data came in as an array of objects. I faced challenges with scraping Event Bright because I received a 403 forbidden code, meaning the site requires a captcha. While I was able to receive HTML from meetup.com, I wasn’t able to successfully traverse the DOM to grab event data in the amount of time that I had because of the deeply nested DOM and figuring out how to use data received from phantom.js as it came in i18n. I also did not implement infinite scrolling, displaying all returned event data on the screen instead.

How pleased are you with your solution?
Prior to this assignment, I had no experience with web scraping nor testing. I’m pleased that I was able to research, understand, and implement both within a short time frame. I’m also pleased that I was also able to put into practice some concepts I learned recently in my coding program, such as how to create a single-page web app with axios calls and building a Node server.

What is the next thing you would do if you had more time?
With more time I would extend web scraping to the remaining two sites, which require(s) more effort for DOM traversal such as using a headless browser to bypass the 403 “Forbidden” status code. I would also deploy the app for public use.

Talk about performance concerns on the frontend?
My main concern about frontend performance is that every time a user navigates to another tab, there is a new axios call which forces the backend to make another cheerio request to scrape that specific web page. One way to mitigate that is to cache the data on the first request (e.g., in Local Storage for a set period of time) and implement a check so that I can load the cached data rather than making a redundant request.


How do you handle the list as you continue scrolling and it gets super long?
My implementation displays all returned event results on the screen at page load, so I did not encounter the performance challenges that I might have with an infinite scrolling implementation.

Talk about scaling the backend.
One way to improve scaling on the backend is to minimize calls to third party sources. Rather than initiating a third party call whenever a user loads a page, my backend could initiate periodic calls to the third party data sources (e.g., once/minute or once/hour), cache the results, and serve the cached data to end users. Another improvement would be to create three controllers so that the server points to index.js and the index will point to different controllers depending on the url, minimizing the amount of logic in one (index.js) file

What are common first steps to scaling your server to handle massive request rates?
The first step would be to have many cloned instances to share the workload. Next, decompose the application based on service or functionality. Another strategy would be to enable load balancing using the cluster module.

#### simple cluster module implementation
```// server.js
const http = require('http');
const pid = process.pid;

http.createServer((req, res) => {
  for (let i=0; i<1e7; i++); // simulate CPU work
  res.end(`Handled by process ${pid}`);
}).listen(8080, () => {
  console.log(`Started process ${pid}`);
});```
---
```// server.js
const http = require('http');
const pid = process.pid;

http.createServer((req, res) => {
  for (let i=0; i<1e7; i++); // simulate CPU work
  res.end(`Handled by process ${pid}`);
}).listen(8080, () => {
  console.log(`Started process ${pid}`);
});```

* source: https://medium.freecodecamp.org/scaling-node-js-applications-8492bd8afadc


What are the performance bottlenecks with your current server? How would you address them?
My current performance bottlenecks are the requests being made to scrape external web sites. CPU performance testing in Node can be done using the os package with the ``os.spus()`` function


3) run server
```nodemon```

### Run Front end

1) open a new tab move to client directory
```cd client```

2) install dependencies
```npm i```

3) start front end
```npm start```

