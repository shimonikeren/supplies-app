var connection = require('./connection.js');

//methods, query data from db
var orm = {
  selectAll: function(){
    var queryString = "SELECT * FROM supplies";
    connection.query(queryString, function (err, result){
      if (err) {
        throw err;
      }
      cb(result);
      console.log(result);
    });
  },

  insertOne: function(supplyName){
    var queryString = "INSERT INTO supplies VALUES (?)";
    connection.queryy(queryString, function (err, result){
      if (err) {
        throw err;
      }
      cb(result);
      console.log(result);
    });
  },

  updateOne: function(oldName, newName){
    var queryString = "UPDATE supplies WHERE supply = (?) VALUES (?)";
    connection.queryy(queryString, function (err, result){
      if (err) {
        throw err;
      }
      cb(result);
      console.log(result);
    });
  }
};

//export orm object; (require in controller.js)
module.exports = orm;
