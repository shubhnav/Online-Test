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

    connection.query('Select * from Users ', function (error, results, fields) {
      if (error)
        throw error;
      console.log('The solution is: ', results);
    });

    connection.end();
  }
}

module.exports =  connection;
