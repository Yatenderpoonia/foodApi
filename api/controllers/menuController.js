'use strict';

var mongoose = require('mongoose'),
    Menu = mongoose.model('Menus');

exports.listMenu = function(req, res) {
    Menu.find({}, function(err, doc) {
        if (err)
            res.send(err);
        res.json(doc);
    });
};


exports.createMenu = function(req, res) {
    var newMenu = new Menu(req.body);
    newMenu.save(function(err, doc) {
        if (err)
            res.send(err);
        res.json(doc);
    });
};


exports.readMenu = function (req,res) {
    var cuisine=req.params.cuisine.split(',');
    Menu.find({'cuisine':{$in:cuisine}}, function(err, doc) {
        if (err)
            res.send(err);
        res.json(doc);

    });
};