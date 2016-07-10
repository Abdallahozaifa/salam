/*****************************
 *     SALAM SERVER          *
 *****************************/
/* global */

/* Imports */
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();
var root = __dirname;
var sms = require("./textMessage.js");

//sms.sendSMS("Yo Whats up Homie, testing for life!!");
////////////
/* CONFIG */
////////////

app.set('port', (process.env.PORT || 8080));

//////////////
/* WEBSITE */
//////////////

app.use('/assets', express.static(root + '/www/salam-dev/salam-site/assets'));
app.use('/style.css', express.static(root + '/www/salam-dev/salam-site/style.css'));
app.use('/404.html', express.static(root + '/www/salam-dev/salam-site/404.html'));
app.use('/index.html', express.static(root + '/www/salam-dev/salam-site/index.html'));
app.use('/salam.css', express.static(root + '/www/salam-dev/salam-site/salam.css'));


// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({
    extended: true
}));

// parse application/json 
app.use(bodyParser.json());

//////////////
/* GET/POST */
//////////////

/* Main Page for Salam Site */
app.get('/', function(req, res) {
    /* Sends the index html page to the user */
    fs.readFile('www/salam-dev/salam-site/index.html', 'utf8', function(err, data) {
        if (!err) res.send(data);
        else return console.log(err);
    });
});

app.post('/reservation', function(req,res){
    var customerReservation = req.body;
    console.log(customerReservation);
    sms.sendSMS(customerReservation);
    
    res.send("Message was received!");
});

////////////
/* LISTEN */
////////////

app.listen(app.get('port'), function() {
    console.log('Sparta is running on port', app.get('port'));
    console.log("https://spartaaaaaaaaaaaaa-abdallahozaifa.c9users.io/");
});