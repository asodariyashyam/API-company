const express=require('express')

const routes=express.Router();

const passport =require('passport')

routes.use('/employ',passport.authenticate('jwt',{ session: false,  failureRedirect:'/api/fellLogin'}),require('./employ'));

routes.use('/admin',require('./admin'))

routes.use("/student", require("./student"));


routes.get("/fellLogin",(req,res)=>{
    return res.status(400).json({"msg": "login fell !!", status :0})
})
module.exports= routes


