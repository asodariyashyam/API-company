const express = require('express')
const app = express()
const port = 8010

const db = require('./config/mongoose')
app.use(express.urlencoded())

const emp_model = require("./models/emp_model");

const passport=require("passport");
const passportJWT=require("./config/passport_jwt");
const session=require("express-session");

app.use(session({
    name:'RNW' ,
    secret: 'surat',
    resave:true,
    saveUninitialized: true,
    cookie:{
        maxAge:60000*60*100 //1 hour
    }
}))
app.use(passport.initialize());
app.use(passport.session());

app.use('/api',require('./routes/api/v1/index'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))