'use strict';


var mongoose = require('mongoose');
var TaskSchema = mongoose.Schema
({
  name: {
    type: String,
    Required: 'Kindly enter the name of the task'
  },
    email:{
    type:String,
        Required: 'Kindly enter the email of the task'
    },
    mobile:{
    type:String
    },
    message:{
    type:String
    },
  Created_date: {
    type: Date,
    default: Date.now
  }
});


module.exports = mongoose.model('Tasks', TaskSchema);
