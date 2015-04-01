var React = require("react");
var Fluxxor = require("fluxxor");
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
var Row = require('../product-row.js');
var SearchBar = require('../search-bar.js');

var ProductTable = React.createClass({

  mixins: [FluxMixin, StoreWatchMixin("ProductsStore")],

  getStateFromFlux: function() {
    var flux = this.getFlux();
    return flux.store("ProductsStore").getState();
  },

  componentDidMount: function() {
    this.getProducts();
  },

  render: function() {

    var style = {
      color: "orange",
      background: "#fff"
    };

    var rows = this.state.products.map(function (p, i) {

        if(p.name.indexOf(this.state.filterText) > -1){
            return (
                <Row product={p} />
            );
        } else {
            return null;
        }

    }.bind(this));

    return (
      <div>

        <SearchBar filterText={this.state.filterText} />

        <table style={style}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Category</th>
                </tr>
            </thead>
            <tbody>

                {rows}            

            </tbody>
        </table>
        
        <button onClick={this.getProducts}>Get more products</button>

      </div>
    );
  },


  getProducts: function(e) {
    this.getFlux().actions.getProducts();
  },

  filterProducts: function(filterText) {
    this.getFlux().actions.filterProducts();
  }

});

module.exports = ProductTable;