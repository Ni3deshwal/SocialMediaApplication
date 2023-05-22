import React, { useState } from 'react'
import fc from '../followerscard/Followerscard.module.css'
import { followuser, unfollowuser } from '../../redux/action/UserAction'
import {useSelector,useDispatch} from 'react-redux'

function User({person}) {
    const serverpublic=process.env.REACT_APP_PUBLIC_FOLDER
    const dispatch=useDispatch();
    const {user}=useSelector((state)=>state.AuthReducer.authdata)
    const [following,setFollowing]=useState(person.followers.includes(user._id))
    
    const handlefollow=()=>{
      following?dispatch(unfollowuser(person._id,user)):
      dispatch(followuser(person._id,user))
      setFollowing((prev)=>!prev)
      
    }
    return (
        <div className={fc.follower}>
            <div>
              <img src={person.profilepicture? serverpublic + person.profilepicture: serverpublic +"defaultProfile.jpeg"} alt="user1" className={fc.followerimg} />
              <div className={fc.name}>
                <span>{person.firstname}</span>
                <span>@{person.username}</span>
              </div>
            </div>
            <button className={fc.fc_button}  onClick={handlefollow}>{following?"Unfollow":"Follow"}</button>
          </div >
  )
}

export default User