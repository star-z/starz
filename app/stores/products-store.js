var Fluxxor = require("fluxxor");
var constants = require("../constants");

var store = Fluxxor.createStore({

  initialize: function() {
    this.products = [];
    this.filterText = "";

    this.bindActions(
      constants.GET_PRODUCTS, this.onGetProducts,
      constants.FILTER_PRODUCTS, this.onFilterProducts
    );
  },

  onFilterProducts: function(payload) {
    this.filterText = payload.filterText;
    this.emit("change");
  },

  onGetProducts: function() {
    /* simulate getting from a service */
    var PRODUCTS = [
      {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
      {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
      {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
      {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
    ];

    for(var i = 0; i < PRODUCTS.length; i++){
      this.products.push(PRODUCTS[i]);
    }

    this.emit("change");
  },

  getState: function() {
    return {
      products: this.products,
      filterText: this.filterText
    };
  }

});

module.exports = store;