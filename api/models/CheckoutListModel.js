'use strict';


var mongoose = require('mongoose');



var checkoutSchema=mongoose.Schema({
    name:{type:String},
    Delivery_address:{type:String},
    payment:{"type":String,"number":Number,"expire":String,"cvc":Number},
    items:[{"name":String,"price":String,"qty":Number}],
    total:{type:Number}
});


module.exports = mongoose.model('Checkouts',checkoutSchema);