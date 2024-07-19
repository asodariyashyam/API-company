const bcrypt=require('bcrypt')
const admin=require("../../../models//admin_model")
const jwt = require('jsonwebtoken');


module.exports.registration= async(req,res)=>{
    try{
        let chekEmail=await admin.findOne({email:req.body.email})
        if (!chekEmail) {

            if(req.body.password == req.body.confirm_password ){
                req.body.password=await bcrypt.hash(req.body.password, 10)
                let registrationData =await admin.create(req.body)

                if(registrationData){
                    return res.status(200).json({"msg": "registration successfully !!", status :0}); 
                }
                else{
                    return res.status(400).json({"msg": "data not registration", status :0});
                }
            }
            else{
                return res.status(400).json({"msg": "password is not mach", status :0});   
            }
        }else{
            return res.status(200).json({"msg": "email allredy registration  ", status :0});
        }

    }catch(err){
        console.log(err)
        return res.status(400).json({"msg": "not Data", status :0});
    }

}


module.exports.adminLogin = async (req, res) => {
    try {
        let checkEmail = await admin.findOne({ email: req.body.email });
        if (checkEmail) {
            if (checkEmail.password) { 
                if (await bcrypt.compare(req.body.password, checkEmail.password)) {
                    const token = jwt.sign({ adminJWP:checkEmail}, 'surat', {expiresIn: '1h', });
                    return res.status(200).json({ "msg": "login", status: 1, adminData:token});
                } else {
                    return res.status(400).json({ "msg": "Invalid password", status: 0 });
                }
            } else {
                return res.status(400).json({ "msg": "Password not set", status: 0 });
            }
        } else {
            return res.status(400).json({ "msg": "Invalid email", status: 0 });
        }
    } catch (err) {
        console.log(err);
        return res.status(400).json({ "msg": "Error", status: 0 });
    }
}
