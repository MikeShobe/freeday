var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser= require('body-parser');
var jwt = require('jsonwebtoken');
var Sequelize = require('sequelize');
var connect = require('../db/connection.js');
var port = process.env.PORT || 3000;
//this will be user to connect to user model
//var db = require('../db/db.js'); this doesnt exist anymore
//var User = db.User; this doesnt exist anymore
var passport = require('../db/passport.js');
var router = require('../router.js');

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(morgan("dev"));
// app.use(function(req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
//     next();
// });

//We are allowing requests to come from different domains in order to develop a client-independent system. If you do not allow this, you will trigger a CORS (Cross Origin Request Sharing) error in the web browser. not sure if we need any of that stuff for the jot^^^^^^^

app.configure(function(){
  app.use(express.static('public')); //not sure if we need this one
  app.use(express.bodyParser());
  app.use(passport.initialize());
  app.use(app.router);
});

//passport.initialize() middleware is required to initialize Passport

app.post('/login',
  //passport.authenticate('local',{successRedirect:'/',failureRedirect:'/login'}),
  function(res,req){
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
   // res.redirect('./db/models/user.js/'+ req.user.username);
    //not sure if im supposed to point to user file, i think its right
// console.log('im here');
});


















