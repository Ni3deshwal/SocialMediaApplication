import React from 'react'
import ps from '../postside/Postside.module.css'
import Postshare from '../postshare/Postshare'
import Posts from '../posts/Posts'

function Postside() {
  return (
    <div className={ps.Postside}>
        <Postshare />
        <Posts />
    </div>
  )
}

export default Postside