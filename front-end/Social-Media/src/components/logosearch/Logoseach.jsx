import React from 'react'
import lg from '../logosearch/Logosearch.module.css'
import logo from '../../img/logo.png'
import {UilSearch} from '@iconscout/react-unicons'

function Logoseach() {
  return (
    <div className={lg.logosearch}>
        <img src={logo} alt="twitter logo" />
        <div className={lg.search}>
            <input type="text" placeholder='#Explore'/>
            <div className={lg.s_icon}>
                <UilSearch />
            </div>
        </div>
    </div>
  )
}

export default Logoseach