const mongoose = require('mongoose');


const addSchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const addData=mongoose.model('employ',addSchema)

module.exports=addData;