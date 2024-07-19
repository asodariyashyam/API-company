const mongoose = require('mongoose');
const multer = require('multer');

const path = require('path');

const imgpath = "/uploads/student";

const STDSchema = mongoose.Schema({
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
    },
    city:{
        type: String,
        required:true   
    },
    Gender:{
        type: String,
        required:true
    },
    Hobby:{
        type: Array,
        required:true
    },
    messages:{
        type: String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})

const storagedata = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '..', imgpath))
    },

    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
})

STDSchema.statics.uploadimage = multer({ storage: storagedata }).single('image')

STDSchema.statics.ipath = imgpath;


const student=mongoose.model('student',STDSchema)

module.exports=student;