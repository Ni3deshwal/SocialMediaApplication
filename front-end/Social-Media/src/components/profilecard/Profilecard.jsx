import React from 'react'
import pc from '../profilecard/Profilecard.module.css'
// import cover from '../../img/cover.jpg'
// import profile from '../../img/profileImg.jpg'
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
function Profilecard({location}) {
    const {user}=useSelector((state)=>state.AuthReducer.authdata)
    const posts=useSelector((state)=>state.PostReducer.posts)
    const serverpublic=process.env.REACT_APP_PUBLIC_FOLDER
    return (
        <div className={pc.profilecard}>
            <div className={pc.profileimage}>
                <img src={user.coverpicture? serverpublic + user.coverpicture: serverpublic +"cover.jpg"} alt="cover" />
                <img src={user.profilepicture? serverpublic + user.profilepicture: serverpublic +"defaultProfile.jpeg"} alt="profile" />
            </div>
            <div className={pc.profilename}>
                <span>{user.firstname ? user.firstname +" "+ user.lastname:"Guest"}</span>
                <span>Software Engineer</span>
            </div>
            <div className={pc.followstatus}>
                <hr />
                <div>
                    <div className={pc.follow}>
                        <span>{user.following.length}</span>
                        <span>Following</span>
                    </div>
                    <div className={pc.vl}></div>
                    <div className={pc.follow}>
                        <span> {user.followers.length}</span>
                        <span>Followers</span>
                    </div>
                    {
                        location==='profilepage'&&(
                            <>
                            
                            <div className={pc.vl}>

                            </div>
                            <div className={pc.follow}>
                                <span>{posts.filter((post)=>post.userId===user._id).length}</span>
                                <span>Posts</span>
                            </div>
                            
                            </>
                        )
                    }

                </div>
                <hr />
            </div>
            {location==='profilepage' ?'':<span>
               <Link style={{textDecoration:"none",color:"inherit" }} to={`/profile/${user._id}`}>
               
               My Profile
               </Link> 
                </span>}
            
        </div>
    )
}

export default Profilecard