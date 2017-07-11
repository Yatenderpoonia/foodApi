'use strict';


var mongoose=require('mongoose');


var menuSchema=mongoose.Schema({
    "cuisine":String,
    "menuItems": [{
        "name":String,
        "price":Number
    }]

});


module.exports = mongoose.model('Menus',menuSchema);
