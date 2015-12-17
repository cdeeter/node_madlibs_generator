// Base Setup
var express = require('express');
var swig = require('swig');
var bodyParser = require('body-parser');

var app = express();

// Set up Swig
app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');

// Use bodyParser
app.use(bodyParser.urlencoded());

// Send template to index page
app.get('/', function(req, res) {
    res.render('index');
});

// Madlib POST request
app.post('/', function(req, res) {
    var data = req.body;
    // Split the pronouns to use the appropriate one based on the story context
    var pronouns = data.pronouns.split("/");
    data.pronouns = pronouns;
    
    // Render the story
    res.render('story', { madLib : data } );
})

app.listen(8080);