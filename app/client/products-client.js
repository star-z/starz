/** @jsx React.DOM */

var React = require('react/addons'),
    Fluxxor = require("fluxxor"),
    actions = require("../actions/products-actions"),
    store = require("../stores/products-store"),
    ProductTable = require("../components/controller-views/product-table");


var stores = { ProductsStore: new store() };
var flux = new Fluxxor.Flux(stores, actions);

var App = React.createClass({
  render: function() {
    return (
          <ProductTable flux={flux} />
    );
  }
});

var ReactApp = React.createFactory(App);
var mountNode = document.getElementById("react-main-mount");
React.renderComponent(new ReactApp({}), mountNode);
