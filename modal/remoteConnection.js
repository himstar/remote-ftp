var mongoose = require('mongoose');
// Page scheme
var remoteConnectionSchema = mongoose.Schema({
    title : {
        type: String
    },
    url : {
        type: String
    }
});