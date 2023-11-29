require("dotenv").config().parsed;
const express=require("express");
const app=express();
const cors=require("cors");
const Route=require("./Router/route");
const PORT=process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use("/api",Route);
require("./db/portfoiodb");

app.listen(PORT,()=>{
    console.log(`server listening to the server ${PORT}`);
})