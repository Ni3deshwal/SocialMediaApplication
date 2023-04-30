import React, { useRef, useState } from 'react'
import psh from '../postshare/Postshare.module.css'
import profileimage from '../../img/profileImg.jpg'
import {UilScenery} from '@iconscout/react-unicons'
import {UilPlayCircle} from '@iconscout/react-unicons'
import {UilLocationPoint} from '@iconscout/react-unicons'
import {UilSchedule} from '@iconscout/react-unicons'
import {UilTimes} from '@iconscout/react-unicons'


function Postshare() {
  const [image,setImage]=useState(null)
  const imageRef=useRef();
  const handleimage=(e)=>{
    if(e.target.files &&e.target.files[0])
    {
      let image=e.target.files[0];
      setImage({
        Image:URL.createObjectURL(image)
      })
    }

  }


  return (
    <div className={psh.Postshare}>
        <img src={profileimage} alt="" />
        <div>
          <input type="text" placeholder="What's happening?" />
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
          <button className={psh.ps_button}>Share</button>
          <div style={{display:"none"}}>
            <input type="file" name='myImage' ref={imageRef} onChange={handleimage} />
          </div>
        </div>
        {image&&(
          <div className={psh.preview}> 
          <UilTimes onClick={()=>setImage(null)}/>
          <img src={image.Image} alt="" />
          </div>
        )}
        </div>
        
    </div>
  )
}

export default Postshare