import * as AuthApi from '../../api/AuthRequest.jsx'


export const login=(formdata)=>async(dispatch)=>{
    
    try{
        dispatch({type:"AUTH_START"})
        const id= await AuthApi.login(formdata);
        
        let user=await id.data.user
        
        const {_id,username,firstname,lastname,followers,following}=user;
        const token=id.data.token;

        dispatch(
            {type:"AUTH_SUCCESS",
            data:{user:{_id,username,firstname,lastname,followers,following},formdata,token}
            })

    }
    catch(error){
        console.log(error)
        dispatch({type:"AUTH_FAILED"})
    }

}
export const signup=(formdata)=>async(dispatch)=>{
    dispatch({type:"AUTH_START"})
    try{

        let id=await AuthApi.signup(formdata);
        let user=await id.data.user
        const token=id.data.token;
        const {_id,username,firstname,lastname,followers,following}=user;
        dispatch(
            {type:"AUTH_SUCCESS",
            data:{user:{_id,username,firstname,lastname,followers,following},formdata,token}
            })

    }
    catch(error){
        console.log(error)
        dispatch({type:"AUTH_FAILED"})
    }
    
}
export const logout=()=>async(dispatch)=>{
    dispatch({type:'LOGOUT'})
}