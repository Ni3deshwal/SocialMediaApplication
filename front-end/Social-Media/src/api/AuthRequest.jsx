import axios from 'axios'

const API=axios.create({baseURL: 'http://localhost:5000'})

export const login=(formdata)=>API.post('auth/login',formdata);
export const signup=(formdata)=>API.post('auth/register',formdata);