const passport=require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const admin=require('../models/admin_model')
var opts = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : 'surat'
}
passport.use(new JwtStrategy(opts, function(adminData, done) {
    let  ad=admin.findById(adminData.adminJWP._id);
    if (ad) {
        return done(null, ad);
    }
    else {
        return done(null, false);
    }
}))

passport.serializeUser((admin,done)=>{
    console.log(admin)
    return done(null,admin.id)
})

passport.deserializeUser(async(id,done)=>{
    const adminData = await admin.findById(id);
    if(adminData){
        return done(null,adminData)
    }
    else{
        return done(null, false)
    }
})