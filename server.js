var express = require('express');
var routes = require('./api');

var app = express()

/* Add headers */
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5050');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

/* api endpoints */
app.use('/api', require('./api') );

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});
