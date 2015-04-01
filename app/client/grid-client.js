    /** @jsx React.DOM */

var React = require('react/addons');
var ReactApp = React.createFactory(require('../components/controller-views/grid'));
	
var mountNode = document.getElementById("react-main-mount");

React.renderComponent(new ReactApp({}), mountNode);
