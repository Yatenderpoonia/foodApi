'use strict';

module.exports = function(app) {
	var todoList = require('../controllers/todoListController');

	// todoList Routes
	app.route('/feedback')
		.get(todoList.list_all_tasks)
		.post(todoList.create_a_task);
	app.route('/chekout')
		.get(todoList.list_checkout)
	    .post(todoList.create_checkout);
	app.route('/tasks/:taskId')
		.get(todoList.read_a_task)
		.put(todoList.update_a_task)
		.delete(todoList.delete_a_task);
};
