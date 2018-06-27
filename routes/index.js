const express = require("express");
const indexRoute = express.Router();
const bodyParser = require('body-parser');

// user model
// const db = require('../models/user');
// const SavedRecipe = require('../models/savedRecipes')

indexRoute.get("/", function (req, res) {
    res.render('index');
});

module.exports = indexRoute;