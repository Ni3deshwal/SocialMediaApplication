import React from 'react';
import { Modal,useMantineTheme } from '@mantine/core';
import pm from '../../pages/auth/Auth.module.css'

function Profilemodal({modalOpened,setModalOpened}) {

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
            <input type="text" className={pm.infoinput} placeholder='First Name' name='firstname' />
            <input type="text" className={pm.infoinput} placeholder='Last Name' name='lastname' />
          </div>
          <div>
            <input type="text" className={pm.infoinput} placeholder='Work at' name='workAt' />

          </div>
          <div>
           <input type="text" className={pm.infoinput} placeholder='Lives in' name='livesIn' />
            <input type="text" className={pm.infoinput} placeholder='Country' name='country' />
          </div>
          <div>
            <input type="text" className={pm.infoinput} placeholder='Relationship Status' />
          </div>
          <div>
            Profile Image
            <input type='file' name='profileImage' />
            Cover Image
            <input type="file" name='coverImage' />
          </div>
          <button className={pm.signbutton}>Update</button>
        </form>
      
      </Modal>

    
    </>
  );
}
export default Profilemodal