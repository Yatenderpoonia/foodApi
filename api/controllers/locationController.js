'use strict';

var mongoose = require('mongoose'),
    Location = mongoose.model('Locations');


exports.list_location = function (req,res) {
   // var title = req.body.title;
    Location.find({},function (err,doc) {
        if(err)
            res.send(err);
        res.json(doc);
    })
};

exports.read_location = function(req, res) {
   //ar name =req.params.name;
    var name = {$regex:req.params.name,$options:'i'};
        Location.find({name:name}, function(err, doc) {
            if (err)
                res.send(err);
            res.json(doc);
        });

};

exports.create_location = function(req, res) {
    var new_location= new Location(req.body);
    new_location.save(function(err, doc) {
        if (err)
            res.send(err);
        res.json(doc);
    });
};
