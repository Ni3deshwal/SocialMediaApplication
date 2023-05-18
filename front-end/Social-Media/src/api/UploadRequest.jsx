import axios from 'axios'

const API   =axios.create({baseURL:"http://localhost:5000"})

export const uploadimage=(data)=>API.post('/upload/',data);
export const uploadpost=(data)=>API.post('post',data)