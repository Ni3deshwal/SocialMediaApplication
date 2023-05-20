import * as userapi from '../../api/UserRequest.jsx'
import React, { useEffect, useState } from 'react'
import ic from '../infocard/Infocard.module.css'
import {UilPen} from'@iconscout/react-unicons'
import Profilemodal from '../profilemodal/Profilemodal.jsx';
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import { logout } from '../../redux/action/AuthAction.jsx';
function Infocard() {
    const[modalOpened,setModalOpened]=useState(false);
    const dispatch=useDispatch()
    const params=useParams();
    const profileuserid=params.id;
    const [profileuser,setProfileuser]=useState({})
    const {user}=useSelector((state)=>state.AuthReducer.authdata)
    useEffect(()=>{
        const fetchprofileuser=async()=>{
            if(profileuserid===user._id)
            {
                setProfileuser(user);
                console.log(user)
            }
            else{
                const profileuser=await userapi.getuser(profileuserid);
                setProfileuser(profileuser);
                console.log(profileuser)
            }
        }
        fetchprofileuser();
    },[user])
    const handlelogout=()=>{
        dispatch(logout());
    }
    
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