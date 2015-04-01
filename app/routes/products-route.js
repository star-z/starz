var React = require('react/addons'),
  Fluxxor = require("fluxxor"),
  actions = require("../actions/products-actions"),
  store = require("../stores/products-store"),
  ProductTable = require("../components/controller-views/product-table");

var stores = { ProductsStore: new store() };
var flux = new Fluxxor.Flux(stores, actions);


/* log the dispatcher actions */

flux.on("dispatch", function(type, payload) {
  if (console && console.log) {
    console.log("[Dispatch]", type, payload);
  }
});


var App = React.createClass({
  render: function() {
    return (
          <ProductTable flux={flux} />
    );
  }
});

var ReactApp = React.createFactory(App);


/* 
  Export views to be called from Express routes
*/

/* view a filterable list of products */
exports.list = function(req, res){
  /* render on the server */
  var html = React.renderToString(ReactApp());
  res.render('products.ejs', {reactOutput: html});
};


/* view a single product by id */
exports.view = function(req, res){
  res.send(req.params.id);
};
