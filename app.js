var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var helpers = require('./server/helpers/helpers.js');

var app = express();

var gamesRouter = express.Router();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/public'));

app.use('/games', gamesRouter);

app.use(helpers.errorLogger);
app.use(helpers.errorHandler);

require('./server/games/gamesRoutes.js')(gamesRouter);


module.exports = app;
