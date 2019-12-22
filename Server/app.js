const express = require("express");
const bodyParser = require("body-parser");
const router = require("./router");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json({limit:'5mb'}));
app.use("/api",router);

app.listen(5000,()=>{
  console.log("server started");
});
