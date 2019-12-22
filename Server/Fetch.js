var db = require("./Database/Db");
async function fetch(){
  return new Promise(async(resolve,reject)=>{
    db.connect();


  })
}
module.exports ={
   fetch
 }
