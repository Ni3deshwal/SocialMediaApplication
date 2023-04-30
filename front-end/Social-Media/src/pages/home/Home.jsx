import React from 'react'
import Profileside from '../../components/profileside/Profileside'
import hm from '../home/Home.module.css'
import Postside from '../../components/postside/Postside.jsx'
import Right from '../../components/rightside/Rightsid.jsx'

function Home() {
    return (


        <div className={hm.home}>
            <Profileside />
            <Postside />
            <Right/>
        </div>

    )
}

export default Home