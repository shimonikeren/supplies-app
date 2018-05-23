var mysql = require("mysql");

// var connection = mysql.createConnection({
//   host: process.env.MYSQL_HOST || "localhost",
//   // port: process.env.MYSQL_PORT || "8889",
//   user: process.env.MYSQL_USER || "root",
//   password: process.env.MYSQL_PASSWORD|| "root",
//   database: process.env.MYSQL_DB || "supplies_db"
// });

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
  connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "root",
    database: "supplies_db"
  })
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});


module.exports = connection;