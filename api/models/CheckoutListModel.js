'use strict';


var mongoose = require('mongoose');



var checkoutSchema=mongoose.Schema({
    "name":String,
    "Delivery_address":String,
    "mobile":String,
    "items":[{"name":String,"price":String,"qty":String}],
    "payment":{"cardType":String,"CardNum":String,"expire":String,"cvc":String},
    "totalamount":String,
    "resturant name":String,
    "resturant address":String
});


module.exports = mongoose.model('Checkouts',checkoutSchema);
