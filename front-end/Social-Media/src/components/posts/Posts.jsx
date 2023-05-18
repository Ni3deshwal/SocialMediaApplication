
import React,{useEffect} from 'react'
import ps from '../posts/Posts.module.css'
// import { Postdata } from '../../Data/Postdata'
import Post from '../post/Post'

import getitmelineposts from '../../redux/action/PostAction.jsx'
import {useDispatch, useSelector} from 'react-redux'




function Posts() {
  const dispatch=useDispatch()
  
  const {user}=useSelector((state)=>state.AuthReducer.authdata)
  const {posts,loading}=useSelector((state)=>state.PostReducer)
  useEffect(()=>{
    dispatch(getitmelineposts(user._id))
  },[])

  return (
    <div className={ps.posts}>
        {
            posts.map((post,id)=>{
                return <Post data={post} id={id} />
            })
        }
    </div>
  )
}

export default Posts