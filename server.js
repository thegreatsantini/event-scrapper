require('dotenv').config(); // loads the .env
const express = require('express');
const morgan = require('morgan');
const path = require('path'); // had to require here
const indexRoute = require('./routes/index');
const cors = require('cors')
// initialize app
const app = express();


// set and use statements set view engine and use middleware
app.use(express.static('public'));
// app.set('views', './views'); what is this for?

app.use(morgan('tiny'))
// app.use('/static', express.static(path.join(__dirname + 'public')))
// app.use(bodyParser.urlencoded({ extended: false }))// what doe sthe true and false do?
app.use(cors());


// routes
app.use('/', indexRoute)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const PORT = process.env.PORT || 7777

app.listen(PORT, () => {
    console.log(`app is locked and loaded at port: ${PORT}`)
});

module.exports = app;