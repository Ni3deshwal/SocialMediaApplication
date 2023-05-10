import postModel from "../models/post.model.js";
import mongoose from "mongoose";

//create a new post

export const createPost = async (req, res) => {
    const newPost = new postModel(req.body); 
    try {
        await newPost.save();
        res.status(200).json("Post created successfully");
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