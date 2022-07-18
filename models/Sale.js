const mongoose= require('mongoose');
const saleSchema =new mongoose.Schema ({
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
        type:Number,      
    },
    quantity:{
        type:Number,        
    },
    total:{
        type:Number,      
    },
    sale_type:{
        type:String,        
    },
    comments:{
        type:String,
    }
    
})

module.exports=mongoose.model("Sale",saleSchema)