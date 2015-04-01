'use strict'
var React = require('react');

var ProductRow = React.createClass({
    render: function() {

        var style = {
          color: this.props.product.stocked ? "red" : "orange"
        };

        return (
                <tr>
                    <td style={style}>{this.props.product.name}</td>
                    <td style={style}>{this.props.product.price}</td>
                    <td style={style}>{this.props.product.category}</td>
                </tr>
        );
    }
});

module.exports = ProductRow;