const mongoose= require('mongoose');
const priceSchema =new mongoose.Schema ({
    userole:{
        type:String,
        trim:true,
    },
    pdct:{
        type:String,
        trim:true,
    },   
    quantity:{
        type:Number,        
    },
    comments:{
        type:String,
    }
    
})

module.exports=mongoose.model("Price",priceSchema)