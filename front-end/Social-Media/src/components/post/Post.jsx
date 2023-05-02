import React from 'react'
import post from '../post/Post.module.css'
import comment from '../../img/comment.png'
import share from '../../img/share.png'
import heart from '../../img/like.png'
import notlike from '../../img/notlike.png'

function Post({data}) {
  return (
    <div className={post.post}>
        <img src={data.img} alt="" />
        <div className={post.postreact}>
            <img src={data.liked?heart:notlike} alt="" />
            <img src={comment} alt="" />
            <img src={share} alt="" />
        </div>
        <span style={{color:"var(--gray)",fontSize:"12px"}}>{data.likes} likes</span>
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