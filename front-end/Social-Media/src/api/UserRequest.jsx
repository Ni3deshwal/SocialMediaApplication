import axios from 'axios'

const API=axios.create({baseURL: 'http://localhost:5000'})
API.interceptors.request.use((req)=>{
    if(localStorage.getItem('token'))
    {
        req.headers.Authorization=`Bearer ${JSON.parse(localStorage.getItem('token'))}`
    }
    return req
})
export const getuser=(userid)=>API.get(`/users/${userid}`)

export const updateuser=(id,formdata)=>API.put(`/user/${id}`,formdata)

export const getalluser=()=>API.get('/user');

export const followuser=(id,data)=>API.put(`user/${id}/follow`,data)
export const unfollowuser=(id,data)=>API.put(`user/${id}/unfollow`,data)
