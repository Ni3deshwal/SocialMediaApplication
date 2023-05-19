import axios from 'axios'

const API=axios.create({baseURL: 'http://localhost:5000'});

export const gettimelineposts=(id)=>API.get(`/post/${id}/timeline`)
export const likepost=(id,userId)=>API.put(`/post/${id}/like/`,{userId: userId})