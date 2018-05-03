var express = require("express");
var supplies = require("../models/supplies.js");
var router = express.Router();

router.get("/", function(req, res) {
    supplies.selectAll(function(data) {
      var suppliesObject = {
        supplies: data
      };
      console.log(suppliesObject);
      res.render("index", suppliesObject);
    });
  });

router.post("/api/supplies", function(req, res) {
  supplies.insertOne(req.body.supply, function(data){	
    res.status(200).json({message: "new item"});
    var newSupplyObj = req.body.supply;
    console.log(newSupplyObj); 
	})
});

router.put("/api/supplies/:id", function(req, res) {
  supplies.updateOne(req.params.id,
    function(data) {
      if (data.changedRows === 0) {
        return res.status(404).end();
      }
      res.status(200).json({message: "updated item"});

      res.status(200).end();
    }
  );
});

router.delete("/api/supplies/:id", function(req, res) {
  supplies.deleteOne(req.params.id,
    function(data) {
      res.status(200).json({message: "deleted item"});
      res.status(200).end();
    }
  );
});

module.exports = router;



