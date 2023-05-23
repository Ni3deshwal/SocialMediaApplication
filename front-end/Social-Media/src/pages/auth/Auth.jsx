import React, { useState } from 'react'
import auth from '../auth/Auth.module.css'
import logo from '../../img/logo.png'
import {useDispatch, useSelector} from 'react-redux'
import {login,signup} from '../../redux/action/AuthAction'


function Auth() {
    const dispatch=useDispatch()
    // const loading=useSelector((state)=>state.AuthReducer.loading)
    const {loading,error}=useSelector((state)=>state.AuthReducer)
    
    const [issignup, setIssignup] = useState(true);
    const [data,setData]=useState({
        firstname:"",
        lastname:"",
        username:"",
        password:"",
        confirmpassword:"",

    })
    const [confirmpassword,setConfirmpassword] = useState(true)
    const handlechange=(e)=>{
        setData({
            ...data,[e.target.name]:e.target.value
        })
    }
    const handlesubmit=(e)=>{
        e.preventDefault();
        if(issignup)
        {
            
            data.confirmpassword===data.password?
            dispatch(signup(data))
            :setConfirmpassword(false);
            if(!loading && !error) alert('Signup failed')
            else alert('Signup Success')
            
        }
        else
        {

            dispatch(login(data))
            if(!loading && !error) alert('Login failed')
            else alert('Login Success')

        }
    }
    const resetForm = (e)=>{
        setData({
                    firstname:"",
                    lastname:"",
                    username:"",
                    password:"",
                    confirmpassword:"",
                })
        setConfirmpassword(true);
    }
    return (
        <div className={auth.auth}>
            {/* This is left side part start */}
            <div className={auth.leftpart}>
                <img src={logo} alt="" />
                <div className={auth.webname}>
                    <h1>NKD Media</h1>
                    <h6>Explore the idea throughout the world</h6>
                </div>
            </div>
            {/* This is right side logo part end */}
            {/* Right side part */}
            <div className={auth.rightpart}>
                <form className={auth.infoform} onSubmit={handlesubmit}>
                    <h3>{issignup ? "Sign up" : "Log in"}</h3>
                    {
                        issignup &&
                        (

                            <div>
                                <input type="text"
                                    placeholder='First Name'
                                    className={auth.infoinput}
                                    name="firstname" onChange={handlechange}
                                    value={data.firstname} />

                                <input type="text"
                                    placeholder='Last Name'
                                    className={auth.infoinput}
                                    name="lastname" 
                                    onChange={handlechange}
                                    value={data.lastname}/>
                            </div>
                        )
                    }
                    <div>
                        <input type="text" className={auth.infoinput} name="username" 
                        placeholder='Username' onChange={handlechange}
                        value={data.username}/>

                    </div>
                    <div>
                        <input type="password"
                            placeholder='Password'
                            className={auth.infoinput}
                            name="password"
                            onChange={handlechange}
                            value={data.password} />
                        {
                            issignup &&
                            (
                                <div>
                                    <input type="password"
                                        placeholder='Confirm Password'
                                        className={auth.infoinput}
                                        name="confirmpassword"
                                        onChange={handlechange}
                                        value={data.confirmpassword} />
                                </div>
                            )
                        }
                    </div>
                    <div>
                        <span style={{ fontSize: "12px" }} onClick={() => {setIssignup((prev) => !prev); resetForm()}}>{issignup ? "Already have an account. Login!" : "Don't have an account.Signup"}</span>
                    </div>
                    <p style={{display:confirmpassword?"none":"block",fontSize:"11px",color:"red",alignSelf:"flex-end"}}>*Password is not match.Please enter same password.</p>
                    <button className={auth.signbutton} type='submit' disabled={loading}>{loading? 'loading':issignup ? "Signup" : "Login"}</button>
                    {/* loading functionality pending */}
                </form>
            </div>
            {/* Right side part end */}
            {/* <Signup /> */}
            {/* <Login /> */}
        </div>
    )
}
// function Login()
// {
//     return(
//         <div className={auth.rightpart}>
//             <form className={auth.infoform}>
//                 <h3>Log in</h3>

//                 <div>
//                     <input type="text" className={auth.infoinput} name="username" placeholder='Username' />

//                 </div>
//                 <div>
//                     <input type="password" 
//                     placeholder='Password'
//                     className={auth.infoinput}
//                     name="password" />
//                 </div>
//                 <div>
//                     <span style={{fontSize:"12px"}}>Don't have an account.Signup</span>

//                 <button className={auth.signbutton} type='submit'>Login</button> 
//                 </div>

//             </form>
//         </div>
//     )
// }
// function Signup()
// {
//     return(
//         <div className={auth.rightpart}>
//             <form className={auth.infoform}>
//                 <h3>Sign Up</h3>
//                 <div>
//                     <input type="text" 
//                     placeholder='First Name'
//                     className={auth.infoinput}
//                     name="firstname" />

//                     <input type="text" 
//                     placeholder='Last Name'
//                     className={auth.infoinput}
//                     name="lastname" />
//                 </div>
//                 <div>
//                     <input type="text" className={auth.infoinput} name="username" placeholder='Username' />

//                 </div>
//                 <div>
//                     <input type="password" 
//                     placeholder='Password'
//                     className={auth.infoinput}
//                     name="password" />

//                     <input type="password" 
//                     placeholder='Password'
//                     className={auth.infoinput}
//                     name="confirmpassword" />

//                 </div>
//                 <div>
//                     <span style={{fontSize:"12px"}}>Already have an account. Login!</span>
//                 </div>
//                 <button className={auth.signbutton} type='submit'>Signup</button>
//             </form>
//         </div>
//     )
// }

export default Auth