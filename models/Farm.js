const mongoose= require('mongoose');
const farmSchema =new mongoose.Schema ({
    userole:{
        type:String,
        trim:true,
    },
    pdct:{
        type:String,
        trim:true,
    },   
    date:{
        type:Date,        
    },
    quantity:{
        type:Number,        
    },
    comments:{
        type:String,
    }
    
})

module.exports=mongoose.model("Farm",farmSchema)