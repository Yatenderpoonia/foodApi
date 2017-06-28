'use strict';

var mongoose = require('mongoose'),
  Task = mongoose.model('Tasks');
  Checkout=mongoose.model('Checkouts');




exports.list_all_tasks = function(req, res) {
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.list_checkout = function (re1,res) {
    Checkout.find({},function (err,checkout) {
        if(err)
          res.send(err);
        res.json(checkout);
    })

};
exports.create_a_task = function(req, res) {
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.create_checkout= function(req, res) {
    var new_checkout = new Checkout(req.body);
    new_checkout.save(function(err, checkout) {
        if (err)
            res.send(err);
        res.json(checkout);
    });
};

exports.read_a_task = function(req, res) {
  Task.findById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.update_a_task = function(req, res) {
  Task.findOneAndUpdate({_id:req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};
// Task.remove({}).exec(function(){});
exports.delete_a_task = function(req, res) {

  Task.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};
