import React from 'react'
import pr from '../profile/Profile.module.css'
import Profileleft from '../../components/profileleft/Profileleft'
import Profilecard from '../../components/profilecard/Profilecard.jsx'
import Postside from '../../components/postside/Postside.jsx'
import Rightside from'../../components/rightside/Rightsid.jsx'

function Profile() {
  return (
    <div className={pr.profile}>
      <Profileleft />
      <div className={pr.profilecenter}>
        <Profilecard location="profilepage" />
        <Postside />
      </div>
      <Rightside />
    </div>
  )
}

export default Profile