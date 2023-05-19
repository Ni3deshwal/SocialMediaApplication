
import React,{useEffect} from 'react'
import ps from '../posts/Posts.module.css'
// import { Postdata } from '../../Data/Postdata'
import Post from '../post/Post'


import {useDispatch, useSelector} from 'react-redux'
import gettimelineposts from '../../redux/action/PostAction.jsx'




function Posts() {
  const dispatch=useDispatch()
  
  const {user}=useSelector((state)=>state.AuthReducer.authdata)
  const {posts,loading}=useSelector((state)=>state.PostReducer)
  useEffect(()=>{
    dispatch(gettimelineposts(user._id))
  },[])

  return (
    <div className={ps.posts}>
        { loading?'Fetching Post':
            posts.map((post,id)=>{
                return <Post data={post} id={id} />
            })
        }
    </div>
  )
}

export default Posts