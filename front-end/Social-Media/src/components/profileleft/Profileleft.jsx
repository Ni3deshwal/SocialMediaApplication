import React from 'react'
import pr from '../profileside/Profileside.module.css'
import LogoSeacrch from '../logosearch/Logoseach.jsx'
import Infocard from '../infocard/Infocard.jsx'
import Followerscard from '../followerscard/Followerscard.jsx'
function Profileleft() {
  return (
    <div className={pr.profileside}>
        <LogoSeacrch />
        <Infocard />
        <Followerscard />

    </div>
  )
}

export default Profileleft