'use strict';


var mongoose = require('mongoose');



var loginSchema=mongoose.Schema({
    "mobile":String,
    "password":String
});


module.exports = mongoose.model('Logins',loginSchema);