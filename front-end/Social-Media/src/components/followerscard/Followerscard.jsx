import React, { useEffect, useState } from "react";
import fc from '../followerscard/Followerscard.module.css'
// import { Followersdata } from '../../Data/Followersdata.jsx'
import User from "../user/User";
import {useSelector} from 'react-redux'
import { getalluser } from "../../api/UserRequest";

function Followerscard() {
  const [person,setPerson]=useState([]);
  const {user}=useSelector((state)=>state.AuthReducer.authdata)
  useEffect(()=>{
    const fetchpersons=async()=>{
      const {data}=await getalluser()
      setPerson(data)
      
    
    }
    fetchpersons();
  },[])
  return (
    <div className={fc.followerscard}><h3>People you may know.</h3>
      {person.map((person, id) => {
        if(person._id!==user._id)
        {
          return (
            <User person={person} key={id}/>
          )
          
        }
      })}
    </div>

  )
}

export default Followerscard