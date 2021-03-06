/**
 * server.js
 * @flow
 */

"use strict";

var express = require("express");
var path = require("path");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");

var config = require("./config");

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Enable CORS middleware

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get(/\/*/, function(req, res) {
  res.sendFile("public/index.html", {root: __dirname})
});



var server = app.listen(config.port, function() {
  var port = server.address().port;
  console.log('Awesomeness is running on port:', port);
});

module.exports = app;
