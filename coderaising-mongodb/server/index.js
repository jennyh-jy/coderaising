var app = require('./server.js');
var port = 8000;

app.listen(port, function () {
  console.log("CodeRaising's RESTful API listening on port " + port);
});
