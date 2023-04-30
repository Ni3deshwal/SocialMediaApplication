import React from 'react'
import ps from '../posts/Posts.module.css'
import { Postdata } from '../../Data/Postdata'
import Post from '../post/Post'


function Posts() {
  return (
    <div className={ps.posts}>
        {
            Postdata.map((post,id)=>{
                return <Post data={post} id={id} />
            })
        }
    </div>
  )
}

export default Posts