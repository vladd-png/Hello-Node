var express = require("express");
var app = express();
// this creates the server for us
app.use(express.static(__dirname));

var allItems = [
  {"item": "cake"}, {"item": "coffee"}
]

app.get('/items', (request, response) => {
  response.send(allItems);
});

var server = app.listen(3000, () => {
  console.log("server running at http://localhost:"+server.address().port)
});
