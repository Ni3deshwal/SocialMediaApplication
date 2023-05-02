import React, { useState } from 'react'
import ic from '../infocard/Infocard.module.css'
import {UilPen} from'@iconscout/react-unicons'
import Profilemodal from '../profilemodal/Profilemodal.jsx';

function Infocard() {
    const[modalOpened,setModalOpened]=useState(false);
    
  return (
    
    <div className={ic.infocard}>
        <div className={ic.infohead}>
            <h4>Your Info</h4>
            <div>
            <UilPen width='2rem' height='1.2rem' onClick={()=>setModalOpened(true)}/>
            <Profilemodal modalOpened={modalOpened} setModalOpened={setModalOpened} />
            </div>

         
        </div>
        <div className={ic.info}>
            <span>
                <b>Status </b>
            </span>
            <span>
                in Relationship
            </span>
        </div>
        
        <div className={ic.info}>
            <span>
                <b> Lives </b>
            </span>
            <span>
                in Delhi
            </span>
        </div>
        
        <div className={ic.info}>
            <span>
                <b>Works at </b>
            </span>
            <span>
                Masai School
            </span>
        </div>
        <button className={ic.icbutton}>Logout</button>
    </div>
    
  )
}

export default Infocard