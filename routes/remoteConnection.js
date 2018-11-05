var express = require('express');
var router = express.Router();
var Client = require('ftp');

//Get page modal
var remoteConnection = require('../modal/remoteConnection.js');

router.get('/connect', (req, res, next)=> {
    var c = new Client();
    c.on('ready', function() {
        c.list(function(err, list) {
        if (err) throw err;
        console.dir(list);
        c.end();
        });
    });
    // connect to localhost:21 as anonymous
    c.connect();
});

//Exports
module.exports = router;
