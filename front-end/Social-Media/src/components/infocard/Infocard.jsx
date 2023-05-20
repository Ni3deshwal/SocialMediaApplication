import React, { useState } from 'react'
import ic from '../infocard/Infocard.module.css'
import {UilPen} from'@iconscout/react-unicons'
import Profilemodal from '../profilemodal/Profilemodal.jsx';

function Infocard() {
    const[modalOpened,setModalOpened]=useState(false);
    
  return (
    
    <div className={ic.infocard}>
        <div className={ic.infohead}>
            <h4>Profile Info</h4>
            {user._id===profileuserid?(
            <div>
            <UilPen width='2rem' height='1.2rem' onClick={()=>setModalOpened(true)}/>
            <Profilemodal modalOpened={modalOpened} setModalOpened={setModalOpened} data={user} />
                
            </div>

            ):""}

         
        </div>
        <div className={ic.info}>
            <span>
                <b>Status </b>
            </span>
            <span>
                {profileuser.relationship}
            </span>
        </div>
        
        <div className={ic.info}>
            <span>
                <b> Lives </b>
            </span>
            <span>
                {profileuser.livesin}
            </span>
        </div>
        
        <div className={ic.info}>
            <span>
                <b>Works at </b>
            </span>
            <span>
                {profileuser.workat}
            </span>
        </div>
        <button className={ic.icbutton} onClick={handlelogout}>Logout</button>
    </div>
    
  )
}

export default Infocard