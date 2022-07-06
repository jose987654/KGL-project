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
    unitprice:{
        type:String,      
    },
    quantity:{
        type:String,        
    },
    total:{
        type:String,      
    },
    sale_type:{
        type:String,        
    },
    comments:{
        type:String,
    }
    
})

module.exports=mongoose.model("Creditsale",creditsaleSchema)