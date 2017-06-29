'use strict';


var mongoose = require('mongoose');



var checkoutSchema=mongoose.Schema({
    "name":String,
    "Delivery_address":String,
    "items":[{"name":String,"price":String,"qty":String}],
    "payment":{"cardType":String,"CardNum":String,"expire":String,"cvc":String},
    "total":Number
});


module.exports = mongoose.model('Checkouts',checkoutSchema);