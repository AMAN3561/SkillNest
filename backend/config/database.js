const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
    try{
        mongoose.connect(process.env.MONGODB_URL);
        console.log("DB connected successfully");
    }catch(error){
        console.error("DB doesn't connected", error);
        process.exit(1);
    }
};