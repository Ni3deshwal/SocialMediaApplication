import React from 'react'
import fc from '../followerscard/Followerscard.module.css'

function User({person}) {
    const serverpublic=process.env.REACT_APP_PUBLIC_FOLDER
    return (
        <div className={fc.follower}>
            <div>
              <img src={person.profilepicture? serverpublic + person.profilepicture: serverpublic +"defaultProfile.jpeg"} alt="user1" className={fc.followerimg} />
              <div className={fc.name}>
                <span>{person.firstname}</span>
                <span>@{person.username}</span>
              </div>
            </div>
            <button className={fc.fc_button} >Follow</button>
          </div >
  )
}

export default User