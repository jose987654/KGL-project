const mongoose= require('mongoose');
const userSchema =new mongoose.Schema ({
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

module.exports=mongoose.model("Regsitration",userSchema)