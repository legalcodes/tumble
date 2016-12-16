var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var env = require('node-env-file');
var router = express.Router();
var routes = require('./server/routes/index');

//const API_KEY = 'PBqHiwj1I0gtTrSEvL6BYjX8YbSMzFtAraiHoY7attGmdBR6AR';

var app = express();
var port = process.env.PORT;
var static_path = __dirname + "/build";

app.use(bodyParser());

app.use(express.static(static_path))
  .get('/', function (req, res) {
    res.sendFile('/build/index.html', {
      root: static_path
    });
  }).listen(process.env.PORT || 8080, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Listening at localhost:', process.env.PORT);
    }
  });

app.use(routes);
