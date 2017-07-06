'use strict';

var mongoose=require('mongoose');


var locationSchema=mongoose.Schema({

            "name": String,
            "latitude": Number,
            "longitude": Number,
            "city_id": Number,
            "city_name": String


});

module.exports = mongoose.model('Locations',locationSchema);