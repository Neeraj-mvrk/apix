var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/Login";

MongoClient.connect(url, function(err,db) {
  if (err) throw err;
  console.log("Database created!");
   db.createCollection("LoginData", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");

    var myobj = { User_Name: "Company ", Passsword: "chaos" };
  db.collection("LoginData").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    console.log(res);
});

});
});
