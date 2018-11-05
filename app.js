var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var config = require('./config/database');
var Client = require('ftp');

//database
var db = mongoose.connection;
mongoose.connect(config.database);
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected');
});

//init app
var app = express();

//prettyfy JSON

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//routes
var pages = require('./routes/pages');
var remoteConnection = require('./routes/remoteConnection');
app.use('/pages', pages);
app.use('/remoteConnection', remoteConnection);

//start server
var port = 3000;
app.listen(port, function(){
    console.log('Server running at port ' +port);
});