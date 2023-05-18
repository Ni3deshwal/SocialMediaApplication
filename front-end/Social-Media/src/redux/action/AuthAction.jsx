// import * as AuthApi from '../../api/AuthRequest.jsx'

export const login=(formdata)=>async(dispatch)=>{
    
    try{
        dispatch({type:"AUTH_START"})

        let id=await fetch('http://localhost:5000/auth/login',{
            method:"POST",
            body:JSON.stringify(formdata),
            headers:{
                "Content-Type":"application/json"
            }
        })
        id=await id.json()
        const {_id,username}=id.user;

        console.log(id)
        dispatch(
            {type:"AUTH_SUCCESS",
            data:{user:{_id,username},formdata}
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

        await fetch('http://localhost:5000/auth/register',{
            method:"POST",
            body:JSON.stringify(formdata),
            headers:{
                "Content-Type":"application/json"
            }
        })
        dispatch(
            {type:"AUTH_SUCCESS",
            data:formdata
            })
    }
    catch(error){
        console.log(error)
        dispatch({type:"AUTH_FAILED"})
    }

}