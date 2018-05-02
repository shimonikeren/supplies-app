var connection = require("../config/connection.js");

//methods, query data from db
var orm = {
  selectAll: function(tableInput, cb){
    var queryString = "SELECT * FROM supplies";
    connection.query(queryString, function (err, result){
      cb(result);
    });
  },

  insertOne: function(supplyName, cb){
    var queryString = "INSERT INTO supplies (supply) VALUES (?)";
    connection.query(queryString, supplyName, function (err, result){
      cb(result);
    });
  },

  //change from needs list to purchased (ie change purchased from false to true)
  updateOne: function(itemId, cb){
    var queryString = "UPDATE supplies SET purchased = 1 WHERE id = (?)";
    connection.query(queryString, itemId, function (err, result){
      cb(result);
    });
  },

  deleteOne: function(itemId, cb){
    var queryString = "DELETE FROM supplies WHERE id = (?)"
    connection.query(queryString, itemId, function (err, result){
      cb(result);
    });
  }
};

//export orm object; (require in supplies.js)
module.exports = orm;
