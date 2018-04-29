/* Inside `burger.js`, import `orm.js` into `burger.js`
    * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.
    * Export at the end of the `burger.js` file.*/

//require orm.js
var orm = require("../config/orm.js");

var supplies ={
    selectAll:function(cb){
        orm.selectAll("supplies", function(res){
            cb(res);
        });
    }
    //TODO:
    //other functions here
}


module.exports = supplies; 