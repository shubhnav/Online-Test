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
    this.con = connection.connect();
  }
  query(SelectQuery){
    this.con.query(SelectQuery,(error,results)=>{
      if(error)
        return reject(error);
      
    })
    connection.end();
  }
}

module.exports =  connection;
