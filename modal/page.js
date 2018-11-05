var mongoose = require('mongoose');
// Page scheme
var PageSchema = mongoose.Schema({
    title : {
        type: String
    },
    slug : {
        type: String
    }
});