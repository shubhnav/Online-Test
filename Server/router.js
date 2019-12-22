const express = require("express");
const db = require("./Database/Db");
const router = express.Router();

router.post('/user', function(req, res) {
  db.query("Select * from Users").then (function (results){
    console.log("result==>",results);
    res.send(results);
  });
});

module.exports = router;
