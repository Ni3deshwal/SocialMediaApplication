import React, { useState } from 'react'
import rs from '../rightside/Rightsid.module.css'
import home from '../../img/home.png'
import notification from '../../img/noti.png'
import {UilSetting} from '@iconscout/react-unicons'
import comment from '../../img/comment.png'
import Trendcard from '../trendcard/Trendcard'
import Sharemodal from '../sharemodal/Sharemodal'
import { Link } from 'react-router-dom'


function Rightsid() {
  const[modalOpened,setModalOpened]=useState(false);
  return (
    <div className={rs.rightsid}>
        <div className={rs.navbar}>
          <Link to={'../home'}>
            <img src={home} alt="" />
          </Link>
            <UilSetting />
            <img src={notification} alt="" />
            <img src={comment} alt="" /> 

        </div>
        <Trendcard />
        <button className={rs.sharebutton} onClick={()=>setModalOpened(true)}>
        Share</button>
        <Sharemodal modalOpened={modalOpened} setModalOpened={setModalOpened} />
        

    </div>
  )
}

export default Rightsid