var express = require("express");
var bodyParser = require("body-parser");

var app = express();
// this creates the server for us
var http = require("http").Server(app);
// creates http that can run server for App
var socketio = require("socket.io")(http);
// how you set up socket.io
var mongoose = require("mongoose");
// this url comes from the mongodb atlas site
var theDataBaseUrl = "mongodb+srv://vladd:December@1092@myfirstcluster.0ehvv.mongodb.net/MyFirstCluster?retryWrites=true&w=majority";

mongoose.connect(theDataBaseUrl, { useNewUrlParser: true }, (err) => {
  console.log('Success', err);
});

// this is how you display the schema of a particular model
// if you have more items, you can add more items.
// this gets rid of the variable decleratio allItems
var Item = mongoose.model('Item', {
  item: String
});

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

// var allItems = [
//   {"item": "cake"}, {"item": "coffee"}
// ];

app.get('/items', (request, response) => {
  Item.find({}, (err, allItems) => {
    response.send(allItems);
  });
  // before mongoose
  // response.send(allItems);
});

app.post('/items', (request, response) => {
  // this was before mongoose
  // allItems.push(request.body);

  // save items with mongoose
  var item = new Item(request.body);

  item.save((err) => {
    if(err) {
      sendStatus(500);
    } else {
      // from below
      socketio.emit('broadcast', request.body)
      response.sendStatus(200);
    }
  })

  // how you broadcast a message from your server to everything that is connected
  // socketio.emit('broadcast', request.body)
  // response.sendStatus(200);
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
