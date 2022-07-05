// // import mongoose,{PassportLocalSchema} from mongoose
// // import passportLocalMongoose from "passport-local-mongoose"
// // const {Schema} = mongoose;
// this file is intended to describe the nature of data that the server is going to receive
const mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');

const UserloginSchema = new mongoose.Schema({
    username:{
        type:String,
        // trim aims at removing the space after the text or string 
        trim:true,
        unique:true,
    },
    email:{
        type:String,
        trim:true,
        unique:true,
        required:true,
    },
    password:{
        type:String
        
    },
})

// Emphasizes unique identifier
UserloginSchema.plugin(passportLocalMongoose, {usernameField:'email'})

// exporting our Schema 
module.exports = mongoose.model("userlogin", UserloginSchema);
