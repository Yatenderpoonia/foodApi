'use strict';

var mongoose = require('mongoose'),
    Resturant = mongoose.model('Resturants');


exports.list_resturant = function (req,res) {
    // var title = req.body.title;
    Resturant.find({},function (err,doc) {
        if(err)
            res.send(err);
        res.json(doc);
    })
};
exports.read_resturant = function(req, res) {
    var city_id=req.body.city_id;
    var city=req.body.city;
    Resturant.find({city_id:req.params.city_id,city:{$regex:req.params.city,$options: 'i'}}, function(err, doc) {
        if (err)
            res.send(err);
        res.json(doc);
    });
};
exports.readByresId = function (req,res) {
    Resturant.find({'restaurants.restaurant.R.res_id':req.params.res_id},function (err,doc) {
      if(err)
          res.send(err);
      res.send(doc);
    });
};
exports.create_resturant = function(req, res) {
    var new_resturant= new Resturant(req.body);
    new_resturant.save(function(err, doc) {
        if (err)
            res.send(err);
        res.json(doc);
    });
};
