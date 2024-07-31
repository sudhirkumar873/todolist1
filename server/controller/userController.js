import User from "../model/userModel.js"

export const create = async(req,res)=>{
    try {
        const userData=new User(req.body);
        if(!userData){
            return res.status(404).json({msg: "User Data Not Found!"})
        }
        const savedData= await userData.save();
        res.status(200).json(savedData)
    } catch (error) {
        res.status(500).json({error: error});
    }
}

export const getAllData= async(req,res)=>{
    try {
        const userData=await User.find();
        if(!userData){
            return res.status(404).json({msg: "User Data Not Found!"})
        }
        res.status(200).json(userData);
    } catch (error) {
        res.status(500).json({error: error});
    }
}

export const getOne= async(req,res)=>{
    try {
        const id= req.params.id;
        const userExist= await User.findOne(id);
        if(!userExist){
            return res.status(404).json({msg: "User Data Not Found!"});
        }
        res.status.json(userExist);
    } catch (error) {
        res.status(500).json({error: error});
    }
}

export const update= async(req,res)=>{
    try {
        const id=req.params.id;
        const userExist= await User.findById(id);
        if(!userExist){
            return res.status(401).json({msg:"User Not Found!"});
        }
        const updatedData=await User.findByIdAndUpdate(id,req.body, {new:true});
        res.status(200).json(updatedData)
    } catch (error) {
        res.status(500).json({error: error});
    }
}

export const deleteOne=async(req,res)=>{
    try {
        const id=req.params.id;
        const userExist= await User.findById(id);
        if(!userExist){
            return res.status(404).json({msg:"User Not Exist!"})
        }
        await User.findByIdAndDelete(id);
        res.status(200).json({msg:"User Deleted Successfully!"})
    } catch (error) {
        res.status(500).json({error: error});
    }
}