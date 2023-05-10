import mongoose from 'mongoose'
const postSchema=mongoose.Schema({
    userId:{type:String,required:true},
    desc:{type:String},
    likes:[],
    image:String,

},
{
    timestamps:true
})

const postModel=mongoose.model("posts",postSchema);
export default postModel;