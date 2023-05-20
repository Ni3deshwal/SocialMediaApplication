import React, { useState } from 'react';
import { Modal,useMantineTheme } from '@mantine/core';
import pm from '../../pages/auth/Auth.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { uploadimage } from '../../redux/action/UploadAction';
import { updateuser } from '../../redux/action/UserAction';

function Profilemodal({modalOpened,setModalOpened,data}) {
  const {password, ...other} = data;
  const[formdata,setFormdata]=useState(other)
  const[profileimage,setProfileimage]=useState(null)
  const [coverimage,setCoverimage]=useState(null)
  const dispatch=useDispatch();
  const params=useParams();
  const {user}=useSelector((state)=>state.AuthReducer.authdata)
  const handlechange=(e)=>{
    setFormdata({...formdata,[e.target.name]:e.target.value});
  }
  const handleimage=(e)=>{
    if(e.target.files&&e.target.files[0])
    {
      let image=e.target.files[0];
      e.target.name==='profilepicture'?setProfileimage(image):setCoverimage(image);
    }
  }
  const handleupdate=(e)=>{
    e.preventDefault();
    let userdata=formdata;
    if(profileimage)
    {
      const data=new FormData();
      const filename=Date.now()+ profileimage.name;
      data.append('name',filename);
      data.append('file',profileimage)
      userdata.profilepicture=filename;
      try {
        dispatch(uploadimage(data))
      } catch (error) {
        console.log(error);
        
      }
    }
    
    if(coverimage)
    {
      const data=new FormData();
      const filename=Date.now()+ coverimage.name;
      data.append('name',filename);
      data.append('file',coverimage)
      userdata.coverpicture=filename;
      try {
        dispatch(uploadimage(data))
      } catch (error) {
        console.log(error);
        
      }
    } 
    dispatch(updateuser(params.id,userdata))
    setModalOpened(false);
  }

  const theme = useMantineTheme();

  return (
    <>
      <Modal
        opened={modalOpened}
        onClose={()=>setModalOpened(false)}
        overlayProps={{
          color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
          opacity: 0.55,
          blur: 3,
          

        }}
        size="55%"
      >
        <form className={pm.infoform}>
          <h3>Your info</h3>
          <div>
            <input type="text" className={pm.infoinput} placeholder='First Name' name='firstname' onChange={handlechange} value={formdata.firstname} />
            <input type="text" className={pm.infoinput} placeholder='Last Name' name='lastname' onChange={handlechange} value={formdata.lastname}/>
          </div>
          <div>
            <input type="text" className={pm.infoinput} placeholder='Work at' name='workat' onChange={handlechange} value={formdata.workat}/>

          </div>
          <div>
           <input type="text" className={pm.infoinput} placeholder='Lives in' name='livesin' onChange={handlechange} value={formdata.livesin}/>
            <input type="text" className={pm.infoinput} placeholder='Country' name='country' onChange={handlechange} value={formdata.country}/>
          </div>
          <div>
            <input type="text" className={pm.infoinput} placeholder='Relationship Status' name='relationship' onChange={handlechange} value={formdata.relationship}/>
          </div>
          <div>
            Profile Image
            <input type='file' name='profilepicture' onChange={handleimage}/>
            Cover Image
            <input type="file" name='coverpicture' onChange={handleimage}/>
          </div>
          <button className={pm.signbutton} onClick={handleupdate}>Update</button>
        </form>
      
      </Modal>

    
    </>
  );
}
export default Profilemodal