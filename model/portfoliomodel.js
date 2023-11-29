const mongoose=require("mongoose");
const {Schema}=mongoose
const {Types}=Schema
const {String,Date}=Types


const portschema=new Schema({
    name:{
        require:true,
        type:String
    },
    email:{
        require:true,
        type:String
    },
    messages:[{
        date:{
            type:Date,
            default:Date.now
        },
        subject:{},
        message:{},
    }]
})


portschema.methods.messageadd=async function(date,subject,message){
this.messages=this.messages.concat({date,subject,message});
await this.save();
return message;
}


const portfoliomodel=mongoose.model("portfoliomodel",portschema);
module.exports=portfoliomodel;