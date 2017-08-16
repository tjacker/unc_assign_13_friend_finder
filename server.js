var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;

// Needed to serve static files to the browser (i.e. client-side js, css, etc.)
app.use(express.static(path.join(__dirname, './app/public')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Require route functions and pass express app a parameter
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, function () {
  console.log('App listening on PORT: ' + PORT);
});
