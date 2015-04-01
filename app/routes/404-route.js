var React = require('react/addons');

var App = React.createClass({
  render: function() {
    return (
          <div>
          	<h1>Lost</h1>
  			     <img src="images/404.jpg"></img>
          	<h2>We can&#39;t find that page</h2>
          </div>
    );
  }
});

var ReactApp = React.createFactory(App);

/* 
  Export views to be called from Express routes
*/

var NotFoundRoute = function(req, res){
  /* render on the server */
  var html = React.renderToString(ReactApp());
  res.render('404.ejs', {reactOutput: html});
};

module.exports = NotFoundRoute;
