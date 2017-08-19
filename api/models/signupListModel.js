'use strict';

var mongoose = require('mongoose');

var signupSchema=mongoose.Schema({
    "name":String,
    "mobile":String,
    "password":String
});


module.exports = mongoose.model('Signups',signupSchema);
