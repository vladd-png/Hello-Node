var express = require("express");
var app = express();
// this creates the server for us
app.use(express.static(__dirname));

app.get('/items', (request, response) => {
  response.send({"item":"eggs"});
})

var server = app.listen(3000, () => {
  console.log("server running at http://localhost:"+server.address().port)
});
