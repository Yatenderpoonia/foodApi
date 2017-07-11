'use strict';

module.exports = function(app) {
	var todoList = require('../controllers/todoListController');
    var CheckoutList=require('../controllers/CheckoutListController');
    var loginList=require('../controllers/loginListController');
    var signupList=require('../controllers/signupListController');
    var locationList=require('../controllers/locationController');
    var resturantList=require('../controllers/resturantController');
    var menuList=require('../controllers/menuController');
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
	app.route('/location')
		.get(locationList.list_location)
	    .post(locationList.create_location);
    app.route('/location/name=:name')
        .get(locationList.read_location);
    app.route('/resturant')
        .get(resturantList.list_resturant)
        .post(resturantList.create_resturant);
    app.route('/resturant/city_id=:city_id&city=:city')
        .get(resturantList.read_resturant);
    app.route('/resturant/res_id=:res_id')
		.get(resturantList.readByresId);
    app.route('/menu')
		.get(menuList.listMenu)
		.post(menuList.createMenu);
    app.route('/menu/cuisine=:cuisine')
		.get(menuList.readMenu);
	app.route('/tasks/:taskId')
		.get(todoList.read_a_task)
		.put(todoList.update_a_task)
		.delete(todoList.delete_a_task);
};
