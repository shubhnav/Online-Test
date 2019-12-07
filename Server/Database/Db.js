var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Root@123',
  database : 'Exam'
});

connection.connect();

connection.query('Select * from Table', function (error, results, fields) {
  if (error)
    throw error;
  console.log('The solution is: ', results);
});

connection.end();
