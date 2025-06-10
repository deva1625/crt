const {userModel} = require("../models/user.model.js")

const createUser = async (req, res) => {
    const { _id, name, phone, email, department } = req.body

    try {
        let user = await userModel.create({
            _id, name, phone, email, department
        })
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
const readUser=async (req,res)=>{
    try{
        let user=await userModel.find()
        res.status(200).json(user)
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}
const getUser=async (req,res)=>{
    

  let id = Number(req.params.id)
  
   
    let user=await userModel.findById(id)

    res.status(200).json(user)
}
const deleteUser=async(req,res)=>{
    let id = Number(req.params.id)
  
   
    let user=await userModel.findByIdAndDelete(id)

    res.status(200).json(user)
}
const updateUser=async (req,res)=>{
    let id = Number(req.params.id)
  
   let name=req.body.name
    let user=await userModel.findByIdAndUpdate(id,{name},{new:true})

    res.status(200).json(user)
}
const updatedUser=async (req,res)=>{
    let id = Number(req.params.id)
  
   let name=req.body.name
    let user=await userModel.findByIdAndUpdate(id,{name},{new:true})

    res.status(200).json(user)
}

module.exports = { createUser,readUser,getUser,deleteUser,updateUser,updatedUser }
