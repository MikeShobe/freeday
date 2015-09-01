var express = require('express');
var app = express();
var pg = require('pg-hstore');
var connect = require('./db/connection');
var router = require('./router');
require('./db/passport');
app.use(router);
var bodyParser = require('body-parser');
var request = require('request');
var config = require('./config/config.js');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/map', function(req, res) {
request.get('https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=' + config.googleMapApi.key, function(err, response, body) {
    res.send(body);
  });
});

// if (sequelize.sync()) {
//   console.log('db running');
// } else {
//   console.log('start db');
// }
app.use(express.static('client'));//should serve index.html page.

router.post('/login',function(req,res,done){
  //user.findOne() do i need this here since i have it in passport.js??
});


// if (connect.sync()){ 
//   console.log('Connected to DB.');
// }
// else {
//   console.log("UNABLE TO CONNECT TO DB");
// }
console.log('Connected');

app.listen(3000);

