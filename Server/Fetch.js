var db = require("./Database/Db");
async function fetch(){
  return new Promise(async(resolve,reject)=>{
    db.connect();
    db.query("Select * from Users",(error , results)=>{
      if(error)
        return reject(err);
      console.log(results);
      resolve(results);
    });

  })
}
module.exports ={
   fetch
 }
