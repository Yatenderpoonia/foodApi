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
var checkoutSchema=mongoose.Schema({
    name:{type:String},
    address:{type:String},
    payment:{card_type:{type:String},card_no:{type:Number},expiry_date:{type:Date},Cvv:{type:Number}},
    food:{quantity:{type:Number},Description:{type:String},price:{type:Number},Subtotal:{type:Number}},
    total_amount:{type:Number}
a});

module.exports = mongoose.model('Tasks', TaskSchema);
module.exports = mongoose.model('Checkouts',checkoutSchema);