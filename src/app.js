/*eslint-disable */
var express = require('express');
/*eslint-disable */
var bodyParser = require('body-parser');
/*eslint-disable */
var routes = require('./routes/routes.js');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

var server = app.listen(1234, function () {
	console.log('app running: ', server.address().port);
});