const AuthReducer = (state = { authdata: null, loading: false, console: false }, action) => {
    switch (action.type) {
        case "AUTH_START":
            return {
                ...state, loading: true, error: false
            }
        case "AUTH_SUCCESS":
            localStorage.setItem("profile", JSON.stringify({ ...action.data }))
            return { ...state, authdata: action.data, loading: false, error: false }
        case "AUTH_FAILED":
            return { ...state, loading: false, error: true }
        default:
            return state

    }
}
export default AuthReducer