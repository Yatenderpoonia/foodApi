'use strict';

var mongoose = require('mongoose');

var signupSchema=mongoose.Schema({
    "name":String,
    "email":String,
    "password":String
});


module.exports = mongoose.model('Signups',signupSchema);
