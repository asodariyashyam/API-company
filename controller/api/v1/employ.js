const emp_model = require("../../../models/emp_model");

module.exports.employData = async(req,res)=>{
    try{
        const  data = await  emp_model.find();
        if(data){
            return res.status(200).json({"msg": "insert Data", status :1 , data:data})
        }
        else{
            return res.status(400).json({"msg": "not Data", status :0});
        }
    }catch(err){
        console.log(err)
        return res.status(400).json({"msg": "not Data", status :0});
    }
}

module.exports.employDataInset=async (req,res)=> {
    try{
        addData = await emp_model.create(req.body)
        if(addData){
            return res.status(200).json({"msg": "insert Data", status :1 , data:addData})
        }
        else{
            return res.status(400).json({"msg": "not insert Data", status :0})
        }
    }
    catch(err){
        console.log(err)
        return res.status(400).json({"msg": "not insert Data", status :0})
        
    }
}

module.exports.deleteEmployData=async (req,res) =>{
    console.log(req.query);
    try{
        let deleteData=await emp_model.findById(req.query.id);
        if(deleteData){
           const deleteRecord= await emp_model.findByIdAndDelete(req.query.id)
           if(deleteRecord){
            return res.status(200).json({"msg": "data delete successfully !!", status :0,deleteData:deleteData})
           }
           else{
            return res.status(400).json({"msg": "something wrong", status :0})
           }
        }
        else{
            return res.status(400).json({"msg": "something wrong", status :0})
        }

    }catch(err){
        console.log(err)
        return res.status(400).json({"msg": "something wrong", status :0})
        
    }
}

module.exports.updateEmployData=async(req,res)=> {
    try{
        let updateData= await emp_model.findById(req.params.id)
        if(updateData){
            let editData = await emp_model.findByIdAndUpdate(updateData.id,req.body);
            if(editData){
                return res.status(200).json({"msg": "Edit Data successfully !! ", status :1 , editData:editData})
            }else{
                return res.status(400).json({"msg": "something wrong", status :0})
            }

        }else{
            return res.status(400).json({"msg": "something wrong", status :0})
        }
    }catch(err){
        console.log(err)
        return res.status(400).json({"msg": "something wrong", status :0})
        
    }
}