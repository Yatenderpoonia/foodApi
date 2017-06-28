'use strict';


var mongoose = require('mongoose');



var checkoutSchema=mongoose.Schema({
    name:{type:String},
    address:{type:String},
    payment:{"number":Number,"expire":String,"cvc":Number,"type":String},
    items:[{"name":String,"price":String,"qty":Number}],
    total_amount:{type:Number}
});


module.exports = mongoose.model('Checkouts',checkoutSchema);