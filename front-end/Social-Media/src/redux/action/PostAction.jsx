import * as postapi from '../../api/PostRequest.jsx'
const gettimelineposts=(id)=>async(dispatch)=>{
    dispatch({type:"DATA_REQUEST"})
    try {
        const data=await postapi.gettimelineposts(id);
        
        dispatch({type:'DATA_SUCCESS',data:data})
    } catch (error) {
        console.log(error)
        
        dispatch({type:"DATA_FAIL"})
    }
}
export default gettimelineposts;