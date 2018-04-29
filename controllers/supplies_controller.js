var express = require("express");
var supplies = require("../models/supplies.js");
var router = express.Router();

//create router for app !!!! ?
router.get("/", function(req, res) {
    supplies.selectAll(function(data) {
      var suppliesObject = {
        supplies: data
      };
      console.log(suppliesObject);
      res.render("index", suppliesObject);
    });
  });

//TODO:
//router.post 
router.post("/", function(req, res) {
  supplies.insertOne(['supply'], [req.body.supply], function(res){	
    //response.json({req});
    console.log("POSTTTT");
    console.log("RESULT.supply: " + res.supply);
      if (err) {
        return res.status(500).end();
      }
	})
});

//router.get 
//router.put
//router.delete

//export router
module.exports = router;



