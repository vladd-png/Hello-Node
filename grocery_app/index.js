var express = require("express");
var bodyParser = requier("body-parser");
var app = express();
// this creates the server for us
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

var allItems = [
  {"item": "cake"}, {"item": "coffee"}
];

app.get('/items', (request, response) => {
  response.send(allItems);
});

var server = app.listen(3000, () => {
  console.log("server running at http://localhost:"+server.address().port)
});
