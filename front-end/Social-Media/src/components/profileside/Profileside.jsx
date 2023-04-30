import React from 'react'
import Logoseach from '../logosearch/Logoseach'
import Profilecard from '../profilecard/Profilecard'
import pr from '../profileside/Profileside.module.css'
import Followerscard from '../followerscard/Followerscard'

function Profileside() {
  return (
    <div className={pr.profileside}>
        <Logoseach />
        <Profilecard />
        <Followerscard />
    
    </div>
  )
}

export default Profileside