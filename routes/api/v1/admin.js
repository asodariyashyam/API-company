const express=require('express')

const routes=express.Router();

const admin=require('../../../controller/api/v1/admin')

routes.post("/registration",admin.registration)

routes.post('/adminLogin',admin.adminLogin)

module.exports= routes