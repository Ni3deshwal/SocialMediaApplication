import userModel from "../models/user.model.js";
import bcrypt from 'bcrypt'

//get a user

export const getUser = async (req, res) => {
    const id = req.params.id;


    try {
        const user = await userModel.findById(id);
        if (user) {
            const { password, ...otherdata } = user._doc
            res.status(200).json(otherdata);
        }
        else {
            res.status(404).json("No such user exist");
        }

    }
    catch (error) {
        res.status(500).json(error);

    }

}
//user update

export const updateUser = async (req, res) => {
    const id = req.params.id;
    const { currentUserId, currentAdminStatus, password } = req.body;

    if (id === currentUserId || currentAdminStatus) {
        try {
            if (password) {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(password, salt)
            }
            const user = await userModel.findByIdAndUpdate(id, req.body, { new: true });

            res.status(200).json(user);



        } catch (error) {
            res.status(500).json(error);

        }

    }
    else {
        res.status(401).json("Access Denied! You can update your own data");
    }


}
//delete user

export const deleteUser = async (req, res) => {
    const id = req.params.id;
    const { currentUserId, currentAdminStatus } = req.body;
    if (currentUserId === id || currentAdminStatus) {
        try {
            const user = await userModel.findByIdAndDelete(id);

            res.status(200).json("User deleted sucessfully");



        }
        catch (error) {
            res.status(500).json(error);

        }

    }
    else{
        res.status(401).json("Access Denied! You can delete your own data");
    }

}
//follow a user
export const followUser=async(req,res)=>{
    const id=req.params.id;   
    const {currentUserId}=req.body;
    if(currentUserId===id)
    {
        res.status(403).json("Action Forbidden")
    }
    else{
        try {
            const followUser=await userModel.findById(id);
            const followingUser=await userModel.findById(currentUserId);
            if(!followUser.followers.includes(currentUserId))
            {
                await followUser.updateOne({$push:{followers:currentUserId}})
                await followingUser.updateOne({$push:{following:id}})
                res.status(200).json("User followed sucessfully")
            }
            else{
                res.status(403).json("User Already Followed by you")
            }
        } catch (error) {
            res.status(500).json(error)
        }
    }
}
//unfollow user
export const unfollowUser=async(req,res)=>{
    const id=req.params.id;   
    const {currentUserId}=req.body;
    if(currentUserId===id)
    {
        res.status(403).json("Action Forbidden")
    }
    else{
        try {
            const followUser=await userModel.findById(id);
            const followingUser=await userModel.findById(currentUserId);
            if(followUser.followers.includes(currentUserId))
            {
                await followUser.updateOne({$pull:{followers:currentUserId}})
                await followingUser.updateOne({$pull:{following:id}})
                res.status(200).json("User unfollowed sucessfully")
            }
            else{
                res.status(403).json("User not Followed by you")
            }
        } catch (error) {
            res.status(500).json(error)
        }
    }
}