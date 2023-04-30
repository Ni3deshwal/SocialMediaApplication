import React from 'react'
import rs from '../rightside/Rightsid.module.css'
import home from '../../img/home.png'
import notification from '../../img/noti.png'
import {UilSetting} from '@iconscout/react-unicons'
import comment from '../../img/comment.png'
import Trendcard from '../trendcard/Trendcard'


function Rightsid() {
  return (
    <div className={rs.rightsid}>
        <div className={rs.navbar}>
            <img src={home} alt="" />
            <UilSetting />
            <img src={notification} alt="" />
            <img src={comment} alt="" /> 

        </div>
        <Trendcard />
        <button className={rs.sharebutton}>Share</button>
        

    </div>
  )
}

export default Rightsid