'use strict';

module.exports = function(app) {
	var todoList = require('../controllers/todoListController');
    var CheckoutList=require('../controllers/CheckoutListController');
    var loginList=require('../controllers/loginListController');
    var signupList=require('../controllers/signupListController');
	// todoList Routes
	app.route('/feedback')
		.get(todoList.list_all_tasks)
		.post(todoList.create_a_task);
	app.route('/login')
		.post(loginList.list_users);
	app.route('/signup')
		.get(signupList.list_newusers)
		.post(signupList.create_newusers);
	app.route('/checkout')
		.get(CheckoutList.list_checkout)
	    .post(CheckoutList.create_checkout);
	app.route('/tasks/:taskId')
		.get(todoList.read_a_task)
		.put(todoList.update_a_task)
		.delete(todoList.delete_a_task);
};
