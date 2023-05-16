export const uploadimage=(data)=>async(dispatch)=>{
    try {
        await fetch(`http://localhost:5000/upload`,{
            method:'POST',
            body:JSON.stringify(data),
            headers:{
                "Content-Type": 'application/json'
                
            }
        })
    } 
    catch (error) {
        console.log(error)        
    }
}