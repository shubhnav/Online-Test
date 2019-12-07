const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const router = express.Router();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.json({limit:'5mb'}));
/*router.all('/', function(req, res) {
    console.log("called", JSON.stringify(req));
    res.json("Hello")
});
*/
app.post("/api",function (request,response){
   try{
   console.log("request from client",request.body);
   let data = {
	"message": "Lol"
   };

   console.log("request from client",data);
   response.send(JSON.stringify(data));
  }
  catch(err){
	console.log("Error",err);
}
 });
//
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })
//app.use('/api', router);
app.listen(5000,()=>{
  console.log("server started");
});
