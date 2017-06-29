'use strict';

var mongoose = require('mongoose'),
    Signup=mongoose.model('Signups');



exports.list_newusers = function (req,res) {
    Signup.find({},function (err,signup) {
        if(err)
            res.send(err);
        res.json(signup);
    })

};


exports.create_newusers= function(req, res) {
    var new_signup = new Signup(req.body);
    new_signup.save(function(err, signup) {
        if (err)
            res.send(err);
        res.json(signup);
    });
};
