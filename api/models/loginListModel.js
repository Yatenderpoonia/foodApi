'use strict';


var mongoose = require('mongoose');



var loginSchema=mongoose.Schema({
    "email":String,
    "password":String
});


module.exports = mongoose.model('logins',loginSchema);