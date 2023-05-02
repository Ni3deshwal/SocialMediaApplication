import React from 'react';
import { Modal,useMantineTheme } from '@mantine/core';
import pm from '../../pages/auth/Auth.module.css'
import Postshare from '../postshare/Postshare';

function Sharemodal({modalOpened,setModalOpened}) {

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
        <Postshare />
      
      </Modal>

    
    </>
  );
}
export default Sharemodal