'use strict';

var mongoose = require('mongoose'),
    Login=mongoose.model('logins');


exports.list_users = function (req,res) {
    Login.find({},function (err,login) {
        if(err)
            res.send(err);
        res.json(login);
    })

};


exports.create_users= function(req, res) {
    var new_login = new Login(req.body);
    new_login.save(function(err, login) {
        if (err)
            res.send(err);
        res.json(login);
    });
};
