import React, {useContext} from 'react'
import { ThemeContext } from '../themeContext'
import {useNavigate} from 'react-router-dom'

function Login(){
    const { login, loginChange, verifyLogin } = useContext(ThemeContext)
    
    const navigate = useNavigate()
    
    const handleSubmit = e => {
        e.preventDefault()
        // get the users and verify that login matches one of the users (verifyLogin())
        console.log("handleSubmit" + e.target)
        verifyLogin(login)
        console.log("verified" + login)
        navigate("/profile")
        console.log("navigating")
    }

    return(
        <div className='container'>
            <h1 id='heading'>SAFEKEEPER</h1>
            <form className='loginForm' onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <br/>
                    <input
                        type="text"
                        name="userName"
                        value={login.userName}
                        onChange={loginChange}
                        placeholder="user name"
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <br/>
                    <input
                        type="password"
                        name="password"
                        value={login.password}
                        onChange={loginChange}
                        placeholder="password"
                    />
                </div>
                <button className='loginBtn' >Login</button>
                <button className='signupBtn' onClick={() => navigate("/createuser")} >Sign Up</button>
            </form>
        </div>
    )
}

export default Login