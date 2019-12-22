var mysql      = require('mysql');
var connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  port :  '3306',
  password : 'Root@123',
  database : 'Exam'
});

class Db{
  constructor(){
    connection.connect();
  }
  query(SelectQuery){
    return new Promise(async(resolve,reject)=>{
      try{

      console.log("SelectQuery==>", SelectQuery);
      connection.query(SelectQuery, function (error, results, fields) {
        if (error)
          return reject(error);
        resolve(results);
      });

      //connection.end();
    }
    catch(err){
      console.log(err);
      return reject(err);
    }
    })
  }

}

module.exports = new Db();
