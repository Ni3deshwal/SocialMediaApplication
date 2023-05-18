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
import { uploadpost } from '../../redux/action/UploadAction'


function Postshare() {
  const loading=useSelector((state)=>state.PostReducer.uploading);
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
  const reset=()=>{
    setImage(null);
    desc.current.value=""
  }
  const handleshare=(e)=>{
    e.preventDefault();
    const newPost={
      userId:user._id,
      desc:desc.current.value,

    }
    if(image)
    {
      const data = new FormData();
      const fileName = Date.now() + image.name;
      data.append("name", fileName);
      data.append("file", image);
      

    
      newPost.image = fileName;
      console.log(newPost);
      
      
      try {
        console.log(image)
        dispatch(uploadimage(data));
      } catch (err) {
        console.log(err);
      }
    }
    dispatch(uploadpost(newPost))
    reset(); 
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
          <button className={psh.ps_button} onClick={handleshare} disabled={loading}>{loading?'loading...':'Share'}</button>
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
        
      {/* <form action="http://localhost:5000/upload" method="post" enctype="multipart/form-data">
      <input type="file" name="avatar" />
      </form> */}
        
    </div>
  )
}

export default Postshare