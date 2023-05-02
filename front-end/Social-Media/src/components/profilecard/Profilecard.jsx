import React from 'react'
import pc from '../profilecard/Profilecard.module.css'
import cover from '../../img/cover.jpg'
import profile from '../../img/profileImg.jpg'
function Profilecard() {
    const profilepage=true;

    return (
        <div className={pc.profilecard}>
            <div className={pc.profileimage}>
                <img src={cover} alt="cover" />
                <img src={profile} alt="profile" />
            </div>
            <div className={pc.profilename}>
                <span>Zendya MJ</span>
                <span>Software Engineer</span>
            </div>
            <div className={pc.followstatus}>
                <hr />
                <div>
                    <div className={pc.follow}>
                        <span> 7,345</span>
                        <span>Followings</span>
                    </div>
                    <div className={pc.vl}></div>
                    <div className={pc.follow}>
                        <span> 1</span>
                        <span>Followers</span>
                    </div>
                    {
                        profilepage&&(
                            <>
                            
                            <div className={pc.vl}>

                            </div>
                            <div className={pc.follow}>
                                <span>3</span>
                                <span>Posts</span>
                            </div>
                            
                            </>
                        )
                    }

                </div>
                <hr />

            </div>
            {profilepage?'':<span>My Profile</span>}
            
        </div>
    )
}

export default Profilecard