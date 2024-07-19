const express=require('express')

const routes=express.Router();
const studentModel=require('../../../models/student_model')

 const studentCtl =require('../../../controller/api/v1/student')

 routes.post('/add_student',studentModel.uploadimage,studentCtl.add_student)

 

module.exports= routes