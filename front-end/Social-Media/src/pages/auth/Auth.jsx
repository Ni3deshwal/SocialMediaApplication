import React from 'react'
import auth from '../auth/Auth.module.css'
import logo from '../../img/logo.png'

function Auth() {
  return (
    <div className={auth.auth}>
        <div className={auth.leftpart}>
            <img src={logo} alt="" />
            <div className={auth.webname}>
                <h1>NKD Media</h1>
                <h6>Explore the idea throughout the world</h6>
            </div>
        </div>
        {/* <Signup /> */}
        <Login />
    </div>
  )
}
function Login()
{
    return(
        <div className={auth.rightpart}>
            <form className={auth.infoform}>
                <h3>Log in</h3>
                
                <div>
                    <input type="text" className={auth.infoinput} name="username" placeholder='Username' />

                </div>
                <div>
                    <input type="password" 
                    placeholder='Password'
                    className={auth.infoinput}
                    name="password" />
                </div>
                <div>
                    <span style={{fontSize:"12px"}}>Don't have an account.Signup</span>
                    
                <button className={auth.signbutton} type='submit'>Login</button> 
                </div>
                
            </form>
        </div>
    )
}
function Signup()
{
    return(
        <div className={auth.rightpart}>
            <form className={auth.infoform}>
                <h3>Sign Up</h3>
                <div>
                    <input type="text" 
                    placeholder='First Name'
                    className={auth.infoinput}
                    name="firstname" />

                    <input type="text" 
                    placeholder='Last Name'
                    className={auth.infoinput}
                    name="lastname" />
                </div>
                <div>
                    <input type="text" className={auth.infoinput} name="username" placeholder='Username' />

                </div>
                <div>
                    <input type="password" 
                    placeholder='Password'
                    className={auth.infoinput}
                    name="password" />

                    <input type="password" 
                    placeholder='Password'
                    className={auth.infoinput}
                    name="confirmpassword" />

                </div>
                <div>
                    <span style={{fontSize:"12px"}}>Already have an account. Login!</span>
                </div>
                <button className={auth.signbutton} type='submit'>Signup</button>
            </form>
        </div>
    )
}

export default Auth