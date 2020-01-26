const express = require("express");
const db = require("./Database/Db");
const router = express.Router();

router.post('/user', function(req, res) {
  req =  req.body;
  let SelectQuery = "Select Id from Users where Username = '"+req.user+"' and Password = '"+req.pass+"'";
  console.log("SelectQuery==>",SelectQuery);
  db.query(SelectQuery).then (function (results){
    console.log("result==>",results);
    res.send(results);
  });
});


router.post('/course', function(req, res) {
  req =  req.body;
  let SelectQuery = "Select * from Branch";
  console.log("SelectQuery==>",SelectQuery);
  db.query(SelectQuery).then (function (results){
    console.log("result==>",results);
    res.send(results);
  });
});


router.post('/question', function(req, res) {
  req =  req.body;
  let SelectQuery = "Select * from Question where BranchId = "+ req.BranchId;
  console.log("SelectQuery==>",SelectQuery);
  db.query(SelectQuery).then (function (results){
    console.log("result==>",results);
    res.send(results);
  });
});

async function correct_ans(qid, opid){
  return new Promise(async (resolve,reject)=>{
    let SelectQuery = "Select correct_ans from Answer where Qid = "+ qid;
    console.log("SelectQuery==>",SelectQuery);
    db.query(SelectQuery).then (function (results){
      console.log("result==>",results);
      resolve(results[0].correct_ans);
    });
  })
}
router.post('/result', async function(req, res) {
  req =  req.body;
  let results = [];
  for(let key in req.Ans){
    console.log("req", req.Ans[key]);
    let data = {};
    data.correct_answer = await correct_ans(key, req.Ans[key]);
    data.Qid = key;
    data.selectedOption = req.Ans[key];
    results.push(data);
  }
  res.send(results);

});

module.exports = router;
