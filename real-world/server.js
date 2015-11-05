/* server.js */

'use strict';

var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    favicon = require('serve-favicon'),
    port = 4470,
    ip = '127.0.0.1';

/* start the express app */
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* ejs for templating */
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'ejs');

/* routes for the site */
require('./app/routes/routes.js')(app);

/* logging to the server */
app.listen(port,ip, function() {
  console.log("Go to " + ip + ":" + port);
});
