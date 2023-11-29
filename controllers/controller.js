const portfoliomodel = require("../model/portfoliomodel");


const homecontroller = (req, res) => {
    res.send("Welcome to home page")
}


// contact controlers
const contactcontroller = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;
        const date = new Date().toDateString();

        if (!name || !email || !subject || !message) {
            return res.status(404).json({ "message":"fill all the details..."});
        }
        const isuser = await portfoliomodel.findOne({ email });

        if (!isuser) {
            const messagesend = await portfoliomodel({
                name, email
            })
            const savedata = await messagesend.save();

            const user = await portfoliomodel.findOne({ email });
            const putmessage = await user.messageadd(date, subject, message);
            return res.status(202).json({ "message": "successfully send message" });
        }
        else {
            const putmessage = await isuser.messageadd(date, subject, message);
            return res.status(202).json({ "message": "successfully send message" });
        }
    }
    catch (err) {
        return res.status(404).json({ "message": "Ooops fail to send message." });
    }
}



// access message data by the accound admin

const adminaccess=async (req,res)=>{
    try{
        if(process.env.ADMIN!==req.params.passworsadmin){
             return res.status(404).json({"message":"invalid url"});
        }
        else{
            const dataadmin=await portfoliomodel.find();
            res.status(202).send(dataadmin);
        }
    }
    catch(err){
return res.status(404).send(err);
    }
}
module.exports = { homecontroller, contactcontroller,adminaccess};