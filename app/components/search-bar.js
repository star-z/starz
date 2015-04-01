'use strict'
var React = require('react');
var Fluxxor = require("fluxxor");
var FluxMixin = Fluxxor.FluxMixin(React);

var SearchBar = React.createClass({

    mixins: [FluxMixin],

    handleChange: function() {
        this.getFlux().actions.filterProducts(this.refs.filterTextInput.getDOMNode().value);
    },
    render: function() {
        return (
            <form>
                <input
                    type="text"
                    placeholder="Search..."
                    ref="filterTextInput"
                    onChange={this.handleChange} />
            </form>
        );
    }
});

module.exports = SearchBar;