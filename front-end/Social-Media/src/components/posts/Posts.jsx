
import React,{useEffect} from 'react'
import ps from '../posts/Posts.module.css'
// import { Postdata } from '../../Data/Postdata'
import Post from '../post/Post'


import {useDispatch, useSelector} from 'react-redux'
import gettimelineposts from '../../redux/action/PostAction.jsx'
import {useParams} from 'react-router-dom'




function Posts() {
  const dispatch=useDispatch()
  const params=useParams();
  
  const {user}=useSelector((state)=>state.AuthReducer.authdata)
  let {posts,loading}=useSelector((state)=>state.PostReducer)
  useEffect(()=>{
    dispatch(gettimelineposts(user._id))
  },[])
  if(!posts) return 'no posts'
  if(params.id) posts.filter((post)=>post.userId===params.id)

  return (
    <div className={ps.pt}>
        { loading?'Fetching Post':
            posts.map((post,id)=>{
                return <Post data={post} id={id} />
            })
        }
    </div>
  )
}

export default Posts