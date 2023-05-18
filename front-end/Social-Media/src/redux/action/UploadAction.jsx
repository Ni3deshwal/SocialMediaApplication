import * as uploadapi from '../../api/UploadRequest.jsx'
export const uploadimage=(data)=>async(dispatch)=>{
    try {
        await uploadapi.uploadimage(data);
        
    } catch (error) {
        console.log(error)
    }
}
export const uploadpost=(data)=>async(dispatch)=>{
    dispatch({type:"UPLOAD_START"})
    try {
        const newPost=await uploadapi.uploadpost(data);
        
        dispatch({type:"UPLOAD_SUCCESS",data:newPost.data});
    } catch (error) {
        console.log(error)
        dispatch({type:'UPLOAD_FAIL'})
    }
}
// export const uploadimage=(data)=>async(dispatch)=>{
//     try {
        
//         const res=await fetch("http://localhost:5000/upload/",{
//             method:'POST',
//             body:JSON.stringify(data),
//             headers:{
//                 "Content-Type": 'application/json'
//             }
//         })
//         console.log(res);
        
        
        
//     } 
//     catch (error) {
//         console.log(error.message)        
//     }
// }