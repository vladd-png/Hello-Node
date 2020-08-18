var express = require("express");
var bodyParser = require("body-parser");

var app = express();
// this creates the server for us
var http = require("http").Server(app);
// creates http that can run server for App
var socketio = require("socket.io")(http);
// how you set up socket.io

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

var allItems = [
  {"item": "cake"}, {"item": "coffee"}
];

app.get('/items', (request, response) => {
  response.send(allItems);
});

app.post('/items', (request, response) => {
  allItems.push(request.body);
  request.sendStatus(200);
});

// whenever someone new logs on - connection - recieve a notification
socketio.on('connection', (socket) => {
  console.log('User Is Connected');
});

// this line runs without socket.io
// var server = app.listen(3000, () => {
// this line runs with socket.io - change app to http
var server = http.listen(3000, () => {
  console.log("server running at http://localhost:"+server.address().port)
});
