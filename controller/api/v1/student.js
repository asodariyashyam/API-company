const studentModel=require('../../../models/student_model')
module.exports.add_student=async function(req,res){
    try{
        console.log(req.file);
        var img = "";
        if (req.file) {
            img = studentModel.ipath + "/" + req.file.filename;
        }
        
        req.body.image = img;
        req.body.name=req.body.fname+" "+req.body.lname;
        
        console.log(req.body);
        
        const stdData= await studentModel.create(req.body);
        if(stdData){
            return res.status(200).json({ "msg": "data inserted", status: 1 , data : stdData});
        }else{
            return res.status(400).json({ "msg": "data not inserted", status: 0 });
        }
    }catch(err){
    console.log(err)
    return res.redirect('back')
    }
}