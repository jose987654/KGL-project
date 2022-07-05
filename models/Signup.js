// // import mongoose,{PassportLocalSchema} from mongoose
// // import passportLocalMongoose from "passport-local-mongoose"
// // const {Schema} = mongoose;
// this file is intended to describe the nature of data that the server is going to receive
const mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');

const signupSchema = new mongoose.Schema({
    firstname:{
        type:String,
        trim:true,
    },
    secondname:{
        type:String,
        trim:true,
    },
    maritalstatus:{
        type:String,
        trim:true,
    },
    dob:{
        type:Date        
    },
    gender:{
        type:String,        
    },
    phonenumber:{
        type:String,
      
    },
    role:{
        type:String,        
    }
})

// Emphasizes unique identifier
signupSchema.plugin(passportLocalMongoose, {usernameField:'email'})

// exporting our Schema 
module.exports = mongoose.model("Signup", signupSchema);
