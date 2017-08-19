'use strict';

var mongoose = require('mongoose'),
    Login=mongoose.model('Signups');


exports.list_users = function (req,res) {
    var mobile = req.body.mobile;
    var password=req.body.password;
    var name=req.body.name;
    Login.findOne({mobile:mobile,password:password},function (err,doc) {
        if(err){
            console.log(err);
            return res.status(500).send();
        }
if(!doc){
            return res.status(404).send({"isSuccess":false});
}
        return res.status(200).send({"isSuccess":true,id:doc._id,"name":doc.name});
    });

};

