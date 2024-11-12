const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        require:true,
    },
    cartID:{
        type:String,
        require:true,
    },
    id:{
        type:String,
        require:true,
    },
    img:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true,
    },
    name: {
        type:String,
        require:true,
    },
    price:{
        type:String,
        require:true,
    },
    createAt:{
        type:Date,
        default:Date.now,
    }
},{
    timestamps:true
})



const User=mongoose.model('webseller',userSchema);

module.exports=User;