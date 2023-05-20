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