const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("DB connected successfully");
    }catch(error){
        console.error("DB doesn't connected", error);
        process.exit(1);
    }
};