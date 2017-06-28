var express = require('express'),
  app = express(),
  port = process.env.PORT || 5000,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'),
    Checkouts= require('.api/models/todoListModel')
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://yatenderpoonia1:yatender123@ds141242.mlab.com:41242/food_database');

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
        res.send(200);
    }
    else {
        next();
    }
};
app.use(allowCrossDomain)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/todoListRoutes');
routes(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port,function(){
  console.log('app listging on port %d',process.env.PORT)
});



