var express = require('express');
var app = express();
var path = require('path');

var routes = require('./routes');

app.set('port', 3000);

//logging middleware usage
app.use(function(req, res, next) {
  console.log(req.method, req.url);
  next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', routes);

var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log("magic happens on port " + port);
});
//console.log("me first, i confirm app.listen is asynchronous");
