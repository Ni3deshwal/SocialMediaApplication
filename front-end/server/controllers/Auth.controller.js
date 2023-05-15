import userModel from "../models/user.model.js";
import dotenv from 'dotenv'
dotenv.config();
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
//regitering a new user
export const registerUser = async (req,res) => {
    
    const salt=await bcrypt.genSalt(10);
    const hashedPassword=await bcrypt.hash(req.body.password,salt);
    req.body.password=hashedPassword;
    const newUser=new userModel(req.body)
    const {username}=req.body;


    try {
        const oldUser=await userModel.findOne({username})
        if(oldUser)
        {
            return res.status(400).json("Username already registered!")
        }
        const user=await newUser.save();
        const token=jwt.sign({username:user.username,id:user._id},process.env.SECRET_KEY,{expiresIn:'1h'})
        res.status(200).json({user,token})
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
}
//login user
export const loginUser=async(req,res)=>{
    const{username,password} = req.body;

    try {
        const user=await userModel.findOne({username: username})
        if(user)
        {
            const validity=await bcrypt.compare(password, user.password)
            if(!validity)
            {
                res.status(400).json("password is wrong")
            }
            else{
                const token=jwt.sign({username:user.username,id:user._id},process.env.SECRET_KEY,{expiresIn:'1h'})
                res.status(200).json({user,token})        
            }
            
            
        }
        else{
            res.status(400).json({"message": "User does not exist"});
        }
    } catch (error) {
        res.status(500).json({message:error.message})        
    }
}
