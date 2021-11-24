require('dotenv').config({path:__dirname+'/./../../.env'})
const mongoose = require("mongoose");

const connectDB = async () => {
    console.log(process.env.PORT);
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("MONGODB connection succesful");
    } catch (error) {
        console.error("MONGODB connection failed");
        process.exit(1);
    }
}

module.exports=connectDB;
