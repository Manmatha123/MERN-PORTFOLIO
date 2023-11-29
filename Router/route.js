const express=require("express");
const Route=express.Router();
const {homecontroller,contactcontroller,adminaccess}=require("../controllers/controller");

Route.get("/",homecontroller);

Route.post("/contact",contactcontroller);

Route.get("/admin/access/:passworsadmin",adminaccess);

module.exports=Route;