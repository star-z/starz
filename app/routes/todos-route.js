var React = require('react/addons'),
	Fluxxor = require("fluxxor"),
	actions = require("../actions/todos-actions"),
	store = require("../stores/todos-store"),
	Todo = require("../components/controller-views/todo");

var stores = { TodosStore: new store() };
var flux = new Fluxxor.Flux(stores, actions);

var App = React.createClass({
  render: function() {
    return (
          <Todo flux={flux} />
    );
  }
});

var ReactApp = React.createFactory(App);

/* 
  Export views to be called from Express routes
*/

var TodosRoute = function(req, res){
  /* render on the server */
  var html = React.renderToString(ReactApp());
  res.render('todos.ejs', {reactOutput: html});
};

module.exports = TodosRoute;

