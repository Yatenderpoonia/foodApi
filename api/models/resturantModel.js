'use strict';


var mongoose=require('mongoose');


var resturantSchema=mongoose.Schema({
    "city":String,
    "city_id":Number,
    "restaurants": [
        {
            "restaurant": {
                "R": {
                    "res_id": Number
                },
                "id":Number,
                "name": String,
                "location": {
                    "address": String
                },
                "cuisines":String,
                "price_range": Number,
                "user_rating": {
                    "aggregate_rating":String
                },
                "featured_image": String
            }
        }
    ]

});


module.exports = mongoose.model('Resturants',resturantSchema);