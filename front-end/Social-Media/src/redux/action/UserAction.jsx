import * as userapi from '../../api/UserRequest.jsx'
export const updateuser=(id,formdata)=>async(dispatch)=>{
    dispatch({type:'UPDATE_START'})
    try {
        const {data}=await userapi.updateuser(id,formdata)
        dispatch({type:'UPDATE_SUCCESS',data:data})
    } catch (error) {
        console.log(error);
        dispatch({type:'UPDATE_FAIL'})
    }
}
export  const followuser=(id,data)=>async(dispatch)=>{
    dispatch({type:"FOLLOW_USER"})
    userapi.followuser(id,data);
}
export const unfollowuser=(id,data)=>async(dispatch)=>{
    dispatch({type:"UNFOLLOW_USER"})
    userapi.unfollowuser(id,data);
}