var React = require('react/addons');
var ReactApp = React.createFactory(require('../components/controller-views/grid'));

/* 
  Export view to be called from Express routes
*/

var GridRoute = function(req, res){
  /* render on the server */
  var html = React.renderToString(ReactApp({}));
  res.render('grid.ejs', {reactOutput: html});
};

module.exports = GridRoute;

