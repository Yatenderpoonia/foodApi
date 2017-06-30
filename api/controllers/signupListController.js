'use strict';

var mongoose = require('mongoose'),
    Signup=mongoose.model('Signups');



exports.list_newusers = function (req,res) {
    Signup.find({},function (err,doc) {
        if(err)
            res.send(err);
        res.json(doc);
    })

};


exports.create_newusers= function(req, res) {
    var new_signup = new Signup(req.body);
    new_signup.save(function(err, doc) {
        if (err)
            res.send(err);
        res.json(doc);
    });
};
