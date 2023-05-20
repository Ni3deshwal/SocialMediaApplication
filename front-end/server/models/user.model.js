import express from 'express'
import mongoose from 'mongoose'

const UserSchema=mongoose.Schema({
    username:{type:String,required:true},
    password:{type:String,required:true},
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    isAdmin:{type:"boolean",default:false},
    profilepicture:String,
    coverpicture:String,
    about:String,
    livesin:String,
    workat:String,
    relationship:String,
    country:String,
    followers:[],
    following:[],
    

},
{timestamps:true} 
)
const userModel=mongoose.model('User', UserSchema)

export default userModel