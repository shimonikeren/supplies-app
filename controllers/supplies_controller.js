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

//router.post 
router.post("/api/supplies", function(req, res) {
  supplies.insertOne(req.body.supply, function(data){	
    res.status(200).json({message: "new item"});
    var newSupplyObj = req.body.supply;
    console.log(newSupplyObj); 
	})
});

//router.put  //update from need list (left) to purchased list (right)
router.put("/api/supplies", function(req, res) {
  supplies.updateOne(req.body.id,
    function(data) {
      // console.log(data);
      if (data.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).json({message: "updated item"});
      res.status(200).end();
    }
  );
});

//router.delete //delete from purchased list 
router.delete("/api/supplies", function(req, res) {
  supplies.deleteOne(req.body.id, function(data){	
    res.status(200).json({message: "deleted item"});
	})
});

//export router
module.exports = router;



