const mongoose= require('mongoose');
const creditsaleSchema =new mongoose.Schema ({
    branch:{
        type:String,
        trim:true,
    },
    customername:{
        type:String,
        trim:true,
    },
    telno:{
        type:String,
        trim:true,
    },
    pdct:{
        type:String,       
    },
    date:{
        type:Date,        
    },
    nin:{
        type:String,        
    },
    unitprice:{
        type:Number,      
    },
    quantity:{
        type:Number,        
    },
    total:{
        type:Number,      
    },
    agent:{
        type:String,        
    },
    comments:{
        type:String,
    }
    
})

module.exports=mongoose.model("Creditsale",creditsaleSchema)