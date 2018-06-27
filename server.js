require('dotenv').config(); // loads the .env
const bodyParser = require('body-parser');
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path'); // had to require here
const indexRoute = require('./routes/index');

// initialize app
const app = express();

// connect to database
mongoose.connect(process.env.MONGODB_URI ||'mongodb://localhost/EZscrapper');

// set and use statements set view engine and use middleware
app.use(express.static('public'));
// app.set('views', './views'); what is this for?
app.set('view engine', 'ejs');
app.use(morgan('tiny'))
app.use('/static', express.static(path.join(__dirname + 'public')))
app.use(bodyParser.urlencoded({ extended: false }))// what doe sthe true and false do?
app.use(expressLayouts);

app.use('/', indexRoute)

// just a convenience, but makes life easier...
app.use(function (req, res, next) {
    res.locals.currentUser = req.user;
    res.locals.alerts = req.flash();
    next();
});

// routes
app.use('/', indexRoute)


// why was this buggy
// app.set('port', process.env.PORT || 3000)
// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//     console.log(`App is locked and loaded in port ${app.get('port')}`)
// })

app.listen(process.env.PORT || 3000);