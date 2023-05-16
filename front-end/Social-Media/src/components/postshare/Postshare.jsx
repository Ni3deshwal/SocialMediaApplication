import React, { useRef, useState } from 'react'
import psh from '../postshare/Postshare.module.css'
import profileimage from '../../img/profileImg.jpg'
import {UilScenery} from '@iconscout/react-unicons'
import {UilPlayCircle} from '@iconscout/react-unicons'
import {UilLocationPoint} from '@iconscout/react-unicons'
import {UilSchedule} from '@iconscout/react-unicons'
import {UilTimes} from '@iconscout/react-unicons'
import { useDispatch, useSelector } from 'react-redux'
import { uploadimage } from '../../redux/action/UploadAction'


function Postshare() {
  const [image,setImage]=useState(null)
  const imageRef=useRef();
  const desc=useRef();
  const dispatch=useDispatch();
  const {user}=useSelector((state)=>state.AuthReducer.authdata)
  console.log(user);
  const handleimage=(e)=>{
    if(e.target.files &&e.target.files[0])
    {
      let image=e.target.files[0];
      setImage(image)
    }

  }
  const handleshare=(e)=>{
    e.preventDefault();
    const newPost={
      userId:user._id,
      desc:desc.current.value,

    }
    if(image)
    {
      const data=new FormData();
      const filename=Date.now()+image.name;
      data.append("name",filename);
      data.append("file",image);
      newPost.image=filename;
      console.log(newPost)
      try {
        dispatch(uploadimage(data));
      } catch (error) {
        console.log(error)
      }
    }
  }


  return (
    <div className={psh.Postshare}>
        <img src={profileimage} alt="" />
        <div>
          <input type="text" placeholder="What's happening?" ref={desc} required/>
          <div className={psh.postoption}>
          <div className={psh.option} style={{color:"var(--photo)"}} onClick={()=>imageRef.current.click()}>
            <UilScenery />
            Photo
          </div>
          <div className={psh.option} style={{color:"var(--video)"}}>
            <UilPlayCircle />
            Video
          </div>
          <div className={psh.option} style={{color:"var(--location)"}}>
            <UilLocationPoint />
            Location
          </div>
          <div className={psh.option} style={{color:"var(--schedule)"}}>
            <UilSchedule  />
            Schedule
          </div>
          <button className={psh.ps_button} onClick={handleshare}>Share</button>
          <div style={{display:"none"}}>
            <input type="file" name='myImage' ref={imageRef} onChange={handleimage} />
          </div>
        </div>
        {image&&(
          <div className={psh.preview}> 
          <UilTimes onClick={()=>setImage(null)}/>
          <img src={URL.createObjectURL(image)} alt="" />
          </div>
        )}
        </div>
        
    </div>
  )
}

export default Postshare