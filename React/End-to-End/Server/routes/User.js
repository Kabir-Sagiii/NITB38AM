const express = require("express"); // Importing express app
const res = require("express/lib/response");
const mongodb = require("mongodb"); // Imported mongodb package
const MongoClient = mongodb.MongoClient;
const ObjectId = mongodb.ObjectId;
const url =
  "URL"

const route = express.Router();

route.get("/getUserData", function (req, res) {
  MongoClient.connect(url, function (err, cluster) {
    if (err) {
      res.send("Error while connecting with server");
    } else {
      var dbRef = cluster.db("NITReactB3UserDB");
      var collectionRef = dbRef.collection("UserCollection");
      collectionRef.find().toArray(function (err, data) {
        if (err) {
          res.send("Error while gettung the data");
        } else {
          res.send(data);
        }
      });
    }
  });
}); //http://localhost:3131/User/getUserData

route.get("/getSpecUser/:id", function (req, res) {
  var id = req.params.id;
  MongoClient.connect(url, function (err, cluster) {
    if (err) {
      console.log(err);
      res.send("error while coneecting with server");
    } else {
      var dbRef = cluster.db("NITReactB3UserDB");
      var collectionRef = dbRef.collection("UserCollection");
      collectionRef.findOne({ _id: ObjectId(id) }, function (err, data) {
        if (err) {
          res.send("error while getting the data");
        } else {
          res.send(data);
        }
      });
    }
  });
}); //http://localhost:3131/User/getSpecUser/{id}

route.post("/insertUserData", function (req, res) {
  console.log(req.body);
  var n = req.body.name;
  var c = req.body.city; //http://localhost:3131/User/insertUserData
  var e = req.body.email;
  var p = req.body.password;

  var docu = {
    name: n,
    city: c,
    email: e,
    password: p,
  };

  MongoClient.connect(url, function (err, cluster) {
    if (err) {
      console.log(err);
      res.send("error while coneecting with server");
    } else {
      var dbRef = cluster.db("NITReactB3UserDB");
      var collectionRef = dbRef.collection("UserCollection");
      collectionRef.insertOne(docu, function (err, msg) {
        if (err) {
          res.send("error while inserting the data");
        } else {
          res.send("Inserted Successfully");
        }
      });
    }
  });
});

route.put("/updateUserData/:id", function (req, res) {
  var id = req.params.id;
  var name = req.query.name;
  var city = req.query.city;
  var email = req.query.email;

  var updatedDoc = {
    name: name,
    city: city,
    email: email,
  };
  MongoClient.connect(url, function (err, cluster) {
    if (err) {
      console.log(err);
      res.send("error while coneecting with server");
    } else {
      var dbRef = cluster.db("NITReactB3UserDB");
      var collectionRef = dbRef.collection("UserCollection");
      collectionRef.updateOne(
        { _id: ObjectId(id) },
        {
          $set: updatedDoc,
        },
        function (err, updatedMsg) {
          if (err) {
            res.send("Error while updating the data");
          } else {
            console.log(updatedMsg);
            res.send("Updated Successfully");
          }
        }
      );
    }
  });
}); //http://localhost:3131/User/updateUserData/{id}

route.delete("/delete/:id", function (req, res) {
  console.log(req.params.id);
  var id = req.params.id;
  MongoClient.connect(url, function (err, cluster) {
    if (err) {
      console.log(err);
      res.send("error while coneecting with server");
    } else {
      var dbRef = cluster.db("NITReactB3UserDB");
      var collectionRef = dbRef.collection("UserCollection");
      // collectionRef.deleteOne({
      //   _id: ObjectId(id),
      //   funtion(err, msg) {
      //     if (err) {
      //       res.send("error while deleting the data");
      //     } else {
      //       res.send("Deleted Successfully");
      //       console.log(msg);
      //     }
      //   },
      // });
      collectionRef.deleteOne({ _id: ObjectId(id) }, function (err, msg) {
        if (err) {
          res.send(error);
        } else {
          console.log("deleted", msg);
          res.send("Deleted");
        }
      });
    }
  });
}); //http://localhost:3131/User/delete/{id}

module.exports = route;
