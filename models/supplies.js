//require orm.js
var orm = require("../config/orm.js");

//call orm functions
var supplies ={
    selectAll:function(cb){
        orm.selectAll("supplies", function(res){
            cb(res);
        });
    },
    insertOne:function(value, cb){
        orm.insertOne(value, function(res){
            cb(res);
        });
    },
    updateOne:function(itemId, cb){
        orm.updateOne(itemId, function(res){
            cb(res);
        });
    },
    deleteOne:function(itemId, cb){
        orm.deleteOne(itemId, function(res){
            cb(res);
        });
    }
}

module.exports = supplies; 