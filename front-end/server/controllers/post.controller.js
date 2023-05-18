import userModel from '../models/user.model.js'
import postModel from "../models/post.model.js";
import mongoose from "mongoose";

//create a new post

export const createPost = async (req, res) => {
    const newPost = new postModel(req.body); 
    try {
        await newPost.save();
        res.status(200).json(newPost);
    } catch (error) {
        res.status(500).json(error);
        
    }   
}  
//get a post

export const getPost = async (req, res) => {
    const id=req.params.id;
    try {
        const post=await postModel.findById(id);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error)
    }
}
//update post
export const updatePost=async(req,res)=>{
    const postId = req.params.id;
    const {userId}=req.body;
    try {
        const post=await postModel.findById(postId);
        if(post.userId===userId)
        {
            await post.updateOne({$set:req.body});
            res.status(200).json("post updated")
        }
        else{
            res.status(403).json("Action Forbidden");
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
//delete a post
export const deletePost=async(req,res)=>{
    const id=req.params.id;
    const{userId}=req.body;
    try {
        const post=await postModel.findById(id);
        if(post.userId==userId){
            await post.deleteOne();
            res.status(200).json("post deleted successfully")
        }
    } catch (error) {
        res.status(500).json(error)
        
    }
}
//like and dislike post

export const likePost=async(req,res)=>{
        const id=req.params.id;
        const{userId}=req.body;
        try {
            const post=await postModel.findById(id);
            if(!post.likes.includes(userId)){
                await post.updateOne({$push:{likes:userId}});
                res.status(200).json("post liked successfully")
            }
            else{
                await post.updateOne({$pull:{likes:userId}});
                res.status(200).json("post unliked successfully")
            }
        } catch (error) {
            res.status(500).json(error)
            
        }
}
//gettimelinePost

export const gettimelinePost=async(req,res)=>{
    const userId=req.params.id;

    try {
        const currentUserPost=await postModel.find({userId:userId})
        const followingPost=await userModel.aggregate([
            {
            
                $match:
                {
                    _id:new mongoose.Types.ObjectId(userId)
                }
            },
            {
                $lookup:
                {
                    from:"posts",
                    localField:"following",
                    foreignField:userId,
                    as:"followingPost"
                }
            },
            {
                $project:{
                    followingPost:1,
                    _id:0
                }
            }
    ])
    res.status(200).json(currentUserPost.concat(...followingPost[0].followingPost).sort((a,b)=>{
        return b.createdAt-a.createdAt;
    }))
    
    } catch (error) {
        res.status(403).json(error)
    }
}