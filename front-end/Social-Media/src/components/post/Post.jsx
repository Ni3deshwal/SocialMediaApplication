import React, { useState } from 'react'
import post from '../post/Post.module.css'
import comment from '../../img/comment.png'
import share from '../../img/share.png'
import heart from '../../img/like.png'
import notlike from '../../img/notlike.png'
import { useSelector } from 'react-redux'
import { likepost } from '../../api/PostRequest'

function Post({data}) {
  const {user}=useSelector((state)=>state.AuthReducer.authdata)
  const post1=useSelector((state)=>state.PostReducer.posts)
  // console.log(post1)
  const[liked,setLiked]=useState(data.likes.includes(user._id))
  const [likes,setLikes]=useState(data.likes.length);
  const handlelike=()=>{
    setLiked((prev)=>!prev)
    likepost(data._id,user._id);
    liked? setLikes((prev)=>prev-1):setLikes((prev)=>prev+1)
  }
  return (
    <div className={post.post}>
        <img src={data.image? process.env.REACT_APP_PUBLIC_FOLDER+ data.image:''} alt="" />
        <div className={post.postreact}>
            <img src={liked?heart:notlike} alt="" style={{cursor:"pointer"}} onClick={handlelike}/>
            <img src={comment} alt="" />
            <img src={share} alt="" />
        </div>
        <span style={{color:"var(--gray)",fontSize:"12px"}}>{likes} likes</span>
        <div className={post.detail}>
            <span>
                <b>{data.name}</b>
            </span>
            <span> {data.desc}</span>
        </div>
    </div>
  )
}

export default Post