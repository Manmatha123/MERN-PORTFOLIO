
const mongoose=require("mongoose");
require("dotenv").config();
console.log()
mongoose.connect(process.env.MONGO_DB_URL,{
    dbName:"myPortDb",
})
.then(()=>{
    console.log("Mongo DB connected");
})
.catch((err)=>{
    console.log("Error while connecting data base");
    console.log(err);
})