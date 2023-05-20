import axios from 'axios'

const API=axios.create({baseURL: 'http://localhost:5000'})
export const getuser=(userid)=>API.get(`/users/${userid}`)

export const updateuser=(id,formdata)=>API.put(`/user/${id}`,formdata)
export const getalluser=()=>API.get('/user');