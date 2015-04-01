/** @jsx React.DOM */

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
var mountNode = document.getElementById("react-main-mount");
React.renderComponent(new ReactApp({}), mountNode);
