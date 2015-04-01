var constants = require("../constants");

var actions = {

  filterProducts: function(text) {
    this.dispatch(constants.FILTER_PRODUCTS, {filterText: text});
  },

  getProducts: function() {
    this.dispatch(constants.GET_PRODUCTS);
  }

};

module.exports = actions;