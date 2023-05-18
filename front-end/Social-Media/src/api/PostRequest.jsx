import axios from 'axios'

const API=axios.create({baseURL: 'http://localhost:5000'});

export const getitmelineposts=(id)=>API.post(`/post/${id}/itmeline`)