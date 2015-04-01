'use strict';

module.exports = function(app) {

	/* home route */
	app.get('/', function(req, res){
	    res.render('index.ejs');
	});

	/* grid */
	var TodosRoute = require('./grid-route');
	app.get('/grid', TodosRoute);

	/* todos */
	var TodosRoute = require('./todos-route');
	app.get('/todos', TodosRoute);

	/* products */
	var ProductsRoute = require('./products-route');
	app.get('/products', ProductsRoute.list);
	app.get('/products/:id', ProductsRoute.view);

	/* 404 */
	var NotFoundRoute = require('./404-route');
	app.get('*', NotFoundRoute);


};
