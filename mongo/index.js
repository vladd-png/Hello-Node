const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://vladd:December@1092@myfirstcluster.0ehvv.mongodb.net/myfirstcluster?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log("success", err)
  client.close();
});
