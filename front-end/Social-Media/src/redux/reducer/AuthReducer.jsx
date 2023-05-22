const AuthReducer = (state = { authdata: null, loading: false, error: false,updateloading:true }, action) => {
    switch (action.type) {
        case "AUTH_START":
            return {
                ...state, loading: true, error: false
            }
        case "AUTH_SUCCESS":
            localStorage.setItem("profile", JSON.stringify({ ...action.data }))
            localStorage.setItem("token", JSON.stringify( action.data.token ))

            return { ...state, authdata: action.data, loading: false, error: false }
        case "AUTH_FAILED":
            return { ...state, loading: false, error: true }
        case 'UPDATE_START':
            return{...state, updateloading: true, error:false}    
        case'UPDATE_SUCCESS':
        localStorage.setItem('profile',JSON.stringify({...action.data}))
        return {...state, authdata:action.data, updateloading: false, error:false} 
        case 'UPDATE_FAIL':
            return {...state,updateloading:false,error:true}
        case 'FOLLOW_USER':
            return{...state, authdata:{...state.authdata,user:{...state.authdata.user,following:[...state.authdata.user.following,action.data]}}}
        case 'UNFOLLOW_USER':
            return {...state, authData: {...state.authdata, user: {...state.authdata.user, following: [...state.authdata.user.following.filter((personId)=>personId!==action.data)]} }}
            case 'LOGOUT':
            localStorage.clear();
            return{ ...state,authdata:null,loading:false,error:false}
        default:
            return state

    }
}
export default AuthReducer