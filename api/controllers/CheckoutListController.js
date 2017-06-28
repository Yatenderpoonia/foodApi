'use strict';

var mongoose = require('mongoose'),
    Checkout=mongoose.model('Checkouts');



exports.list_checkout = function (req,res) {
    Checkout.find({},function (err,checkout) {
        if(err)
            res.send(err);
        res.json(checkout);
    })

};

exports.create_checkout= function(req, res) {
    var new_checkout = new Checkout(req.body);
    new_checkout.save(function(err, checkout) {
        if (err)
            res.send(err);
        res.json(checkout);
    });
};
